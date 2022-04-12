using DomProject_WebApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace DomProject_WebApi.Repository
{
    /// <summary>
    /// Base implementation of <see cref="IReadOnlyRepository{T}"/> for a given <see cref="DbContext"/>.
    /// </summary>
    /// <typeparam name="T">The entity of the repository.</typeparam>
    /// <typeparam name="TContext">The <see cref="DbContext"/> to which the entity belongs.</typeparam>
    public class BaseReadOnlyRepository<T, TContext> : IReadOnlyRepository<T> where T : class where TContext : DbContext
    {
        internal readonly TContext _context;

        /// <summary>
        /// Creates a new instance of <see cref="BaseReadOnlyRepository{T, TContext}"/>
        /// </summary>
        /// <param name="context">The <see cref="DbContext"/> instance.</param>
        public BaseReadOnlyRepository(TContext context)
        {
            _context = context;
        }

        public IQueryable<T> AsQueryable() => _context.Set<T>();

        public virtual async Task<IEnumerable<T>> GetAsync() =>
            await _context
            .Set<T>()
            .AsNoTracking()
            .ToListAsync();

        public virtual async Task<IEnumerable<T>> GetWhereAsync(Expression<Func<T, bool>> predicate) =>
            await _context
            .Set<T>()
            .AsNoTracking()
            .Where(predicate)
            .ToListAsync();

        public virtual async Task<T> GetAsync(Expression<Func<T, bool>> predicate) =>
            await _context
            .Set<T>()
            .AsNoTracking()
            .FirstOrDefaultAsync(predicate);
    }

    /// <summary>
    /// Base implementation of <see cref="IRepository{T}"/> for a given <see cref="DbContext"/>.
    /// </summary>
    /// <typeparam name="T">The entity of the repository.</typeparam>
    /// <typeparam name="TContext">The <see cref="DbContext"/> to which the entity belongs.</typeparam>
    public class BaseRepository<T, TContext> : BaseReadOnlyRepository<T, TContext>, IRepository<T> where T : DbObject where TContext : DbContext
    {
        /// <summary>
        /// Creates a new instance of <see cref="BaseRepository{T, TContext}"/>
        /// </summary>
        /// <param name="context">The <see cref="DbContext"/> instance.</param>
        public BaseRepository(TContext context) : base(context)
        {

        }

        /// <summary>
        /// Provides a method for adding and saving an entity to the database. 
        /// <see cref="DbContext.SaveChangesAsync(System.Threading.CancellationToken)"/> should be called if overriden.
        /// </summary>
        /// <param name="entity">The entity to insert.</param>
        /// <returns>The inserted entity.</returns>
        protected virtual async Task<T> OnInsert(T entity)
        {
            _context.Add(entity);
            await _context.SaveChangesAsync();

            return entity;
        }

        /// <summary>
        /// Creates a new instance of the entity on database.
        /// </summary>
        /// <param name="entity">The entity to insert.</param>
        /// <returns>The inserted entity.</returns>
        public async Task<T> InsertAsync(T entity)
        {
            if (entity is Traceable traceable)
            {
                traceable.SetTraceValues();
            }

            return await OnInsert(entity);
        }

        /// <summary>
        /// Provides a method for updating and saving an entity on the database. 
        /// <see cref="DbContext.SaveChangesAsync(System.Threading.CancellationToken)"/> should be called if overriden.
        /// </summary>
        /// <param name="entity">The entity to update.</param>
        /// <returns>The updated entity.</returns>
        protected virtual async Task<T> OnUpdate(T entity)
        {
            _context.Update(entity);
            await _context.SaveChangesAsync();

            return entity;
        }

        /// <summary>
        /// Updates a given entity on database.
        /// </summary>
        /// <param name="entity">The entity to update.</param>
        /// <returns>The updated entity.</returns>
        public async Task<T> UpdateAsync(T entity)
        {
            if (entity is Traceable traceable)
            {
                traceable.SetUpdateValues();
            }

            return await OnUpdate(entity);
        }

        /// <inheritdoc cref="IRepository{T}.DeleteAsync(int)"/>
        public virtual async Task<bool> DeleteAsync(int key)
        {
            T match = await _context.Set<T>().FindAsync(key); 

            if (match == null)
            {
                return false;
            }
            else
            {
                _context.Remove(match);

                var result = await _context.SaveChangesAsync();

                return result > 0;
            }

        }
    }
}
