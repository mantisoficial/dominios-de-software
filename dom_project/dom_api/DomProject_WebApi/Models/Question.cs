using System.Collections.Generic;

namespace DomProject_WebApi.Models
{
    public class Question : DbObject
    {
        public string Title { get; set; }
        public string Text { get; set; }
        public string Code { get; set; }
        public List<AnswerValue> AnswerValues { get; set; }
        public Subject Subject { get; set; }
    }

    public enum Subject
    {
        Stem = 0,
        HumanSciences = 1,
        Biologics = 2,
    }
}
