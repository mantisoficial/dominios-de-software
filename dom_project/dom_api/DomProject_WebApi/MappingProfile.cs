using AutoMapper;
using DomProject_WebApi.Dtos;
using DomProject_WebApi.Models;

namespace DomProject_WebApi
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            CreateMap<QuestionViewModel, Question>();
            CreateMap<Question, QuestionViewModel>();

            CreateMap<AnswerValueViewModel, AnswerValue>();
            CreateMap<AnswerValue, AnswerValueViewModel>();

            CreateMap<UserViewModel, User>();
            CreateMap<User, UserViewModel>();
        }
    }
}
