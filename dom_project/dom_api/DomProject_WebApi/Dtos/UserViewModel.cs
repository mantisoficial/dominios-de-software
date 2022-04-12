using DomProject_WebApi.Models;

namespace DomProject_WebApi.Dtos
{
    public class UserViewModel : DbObject
    {
        public string Email { get; set; }
        public string Ssn { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
    }
}
