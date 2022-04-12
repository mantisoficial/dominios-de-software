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
    [EnableCors("DomProjectPolicy")]
    [Route("api/v1/[controller]")]
    public class UsersController : Controller
    {
        private readonly IRepository<User> _repository;
        private readonly IMapper _mapper;

        public UsersController(IRepository<User> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _repository.GetAsync();
            IEnumerable<UserViewModel> response = _mapper.Map<IEnumerable<UserViewModel>>(users);
            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var user = await _repository.GetAsync(x => x.Id == id);
            UserViewModel response = _mapper.Map<UserViewModel>(user);
            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] UserViewModel user)
        {
            user.Id = 0;
            User mapped = _mapper.Map<User>(user);
            User response = await _repository.InsertAsync(mapped);

            return Ok(_mapper.Map<UserViewModel>(response));
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] UserViewModel user)
        {
            User mapped = _mapper.Map<User>(user);
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
