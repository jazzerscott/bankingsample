using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Caching;
namespace Prototype.Banking.Users
{
    public class UserManager
    {
        //todo make singleton

        public static AuthenticationResponse AuthenticateUser(AuthenticationRequest request)
        {
            AuthenticationResponse response = new AuthenticationResponse();
            if(request.UserName=="test" &&request.Password == "password")
            {
                response.Success = true;
                
                User user = new User()
                {
                    FirstName = "Bonnie",
                    LastName = "Appleseed",
                    UserName = "test"
                };
                user.AuthToken = Convert.ToBase64String(Guid.NewGuid().ToByteArray()); //todo use jwt orsome other standard
                //cache in memory for now, todo nosql or sql cache
                HttpContext.Current.Cache.Add(user.AuthToken, user, null, Cache.NoAbsoluteExpiration, TimeSpan.FromHours(1), CacheItemPriority.NotRemovable, null);
                response.User = user;
            }
            else
            {
                response.Success = false;
                response.ErrorMessgage = "Invalid User Name or Password";
            }
            return response;
        }
        public static User GetCurrentUser()
        {
            string authToken = HttpContext.Current.Request.Headers["AuthToken"];
            if(authToken == null)
            {
                return null;
            }
            return HttpContext.Current.Cache[authToken] as User;
        }
    }
   
}