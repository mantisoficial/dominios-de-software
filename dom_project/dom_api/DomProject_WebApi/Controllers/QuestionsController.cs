using DomProject_WebApi.Models;
using DomProject_WebApi.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DomProject_WebApi.Controllers
{
    [ApiController]
    [EnableCors("PortfolioPolicy")]
    [Route("api/v1/[controller]")]
    public class QuestionsController : Controller
    {
        private readonly IRepository<Question> _repository;

        public QuestionsController(IRepository<Question> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _repository.GetAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _repository.GetAsync(x => x.Id == id));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Question question)
        {

            return Ok(await _repository.InsertAsync(question));
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Question question)
        {
            return Ok(await _repository.UpdateAsync(question));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            bool result = await _repository.DeleteAsync(id);
            if (result)
                return Ok();
            else
                return BadRequest();
        }
    }
}
