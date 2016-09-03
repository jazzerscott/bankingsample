using Prototype.Banking.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Prototype.Banking.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    [RoutePrefix("api/banking")]
    public class BankingController : ApiController
    {
        [Route("accounts")]
        public IHttpActionResult GetAccounts()
        {
            return Ok(BankingProvider.GetInstance().GetAccounts());
        }
    }
}
