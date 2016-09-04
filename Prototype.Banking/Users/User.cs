using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Prototype.Banking.Users
{
    public class User
    {
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AuthToken { get; set; }
    }
}