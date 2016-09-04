using Prototype.Banking.Account;
using Prototype.Banking.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
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
            User user = UserManager.GetCurrentUser();
            return Ok(BankingProvider.GetInstance().GetAccounts(user));
        }
        [Route("history/{accountId}")]
        public IHttpActionResult GetHistory(string accountId)
        {
            User user = UserManager.GetCurrentUser();
            return Ok(BankingProvider.GetInstance().GetAccountHistory(user,accountId));
        }
    }
}
