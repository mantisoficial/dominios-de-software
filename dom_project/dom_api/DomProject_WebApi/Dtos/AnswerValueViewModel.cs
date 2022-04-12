using DomProject_WebApi.Models;

namespace DomProject_WebApi.Dtos
{
    public class AnswerValueViewModel : DbObject
    {
        public int ProductId { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }
    }
}
