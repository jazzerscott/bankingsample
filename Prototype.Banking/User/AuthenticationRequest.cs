﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Prototype.Banking.User
{
    public class AuthenticationRequest
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}