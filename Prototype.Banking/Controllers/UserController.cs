using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Prototype.Banking.Users;
using System.Web.Http.Cors;

namespace Prototype.Banking.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        [HttpPost]
        [Route("authenticate")]
        public IHttpActionResult Authenticate([FromBody]AuthenticationRequest request)
        {
            return Ok(UserManager.AuthenticateUser(request));
        }
    }
}
