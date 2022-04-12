using DomProject_WebApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DomProject_WebApi.Repository.Sql
{
    public class SqlQuestionRepository : BaseRepository<Question, DomProjectContext>
    {
        public SqlQuestionRepository(DomProjectContext context) : base(context)
        { }

        public override async Task<IEnumerable<Question>> GetAsync() =>
           await _context
           .Questions
           .Include(x => x.AnswerValues)
           .AsNoTracking()
           .ToListAsync();
    }
}
