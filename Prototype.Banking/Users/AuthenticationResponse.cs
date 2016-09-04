using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Prototype.Banking.Users
{
    public class AuthenticationResponse
    {
        public bool Success { get; set; }
        public User User { get; set; }
        public string ErrorMessgage { get; set; }
    }
}