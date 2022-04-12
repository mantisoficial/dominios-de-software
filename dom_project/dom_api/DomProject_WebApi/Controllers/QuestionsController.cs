using AutoMapper;
using DomProject_WebApi.Dtos;
using DomProject_WebApi.Models;
using DomProject_WebApi.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DomProject_WebApi.Controllers
{
    [ApiController]
    [EnableCors("PortfolioPolicy")]
    [Route("api/v1/[controller]")]
    public class QuestionsController : Controller
    {
        private readonly IRepository<Question> _repository;
        private readonly IMapper _mapper;

        public QuestionsController(IRepository<Question> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var questions = await _repository.GetAsync();
            IEnumerable<QuestionViewModel> response = _mapper.Map<IEnumerable<QuestionViewModel>>(questions);
            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var question = await _repository.GetAsync(x => x.Id == id);
            QuestionViewModel response = _mapper.Map<QuestionViewModel>(question);
            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] QuestionViewModel question)
        {
            question.Id = 0;
            Question mapped = _mapper.Map<Question>(question);
            Question response = await _repository.InsertAsync(mapped);

            return Ok(_mapper.Map<QuestionViewModel>(response));
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] QuestionViewModel question)
        {
            Question mapped = _mapper.Map<Question>(question);
            return Ok(await _repository.UpdateAsync(mapped));
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
