using DomProject_WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DomProject_WebApi.Repository.Sql
{
    public class DomProjectContext : DbContext
    {
        public DomProjectContext() { }


        /// <summary>
        /// Creates a new <see cref="DbContext"/> of <see cref="DomProjectContext"/> with custom settings.
        /// </summary>
        /// <param name="options"><see cref="DbContext"/> options.</param>
        public DomProjectContext(DbContextOptions<DomProjectContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Question>()
                .HasMany(x => x.AnswerValues)
                .WithOne(x => x.Question);
        }

        public DbSet<Question> Questions { get; set; }
        public DbSet<AnswerValue> AnswerValues { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
