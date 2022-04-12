namespace DomProject_WebApi.Models
{
    public class User : DbObject
    {
        public string Email { get; set; }
        public string Ssn { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
    }
}
