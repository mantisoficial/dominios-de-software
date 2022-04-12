namespace DomProject_WebApi.Models
{
    public class AnswerValue : DbObject
    {
        public Question Question { get; set; }
        public int QuestionId { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }
    }
}
