using DomProject_WebApi.Models;
using System.Collections.Generic;

namespace DomProject_WebApi.Dtos
{
    public class QuestionViewModel : DbObject
    {
        public string Title { get; set; }
        public string Text { get; set; }
        public string Code { get; set; }
        public List<AnswerValueViewModel> AnswerValues { get; set; }
        public Subject Subject { get; set; }
    }

    public enum Subject
    {
        Stem = 1,
        HumanSciences = 2,
        Biologics = 3,
    }
}

