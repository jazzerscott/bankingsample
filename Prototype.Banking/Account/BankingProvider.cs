using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Prototype.Banking.Account
{
    public class BankingProvider
    {
        private static BankingProvider _instance;
        private BankingProvider() { }

        public static BankingProvider GetInstance()
        {
            if(_instance == null)
            {
                _instance = new BankingProvider();
            }
            return _instance;
        }
        public List<BankAccount> GetAccounts()
        {
            List<BankAccount> accounts = new List<BankAccount>();
            accounts.Add(new BankAccount()
            {
                Balance = 1015.00M,
                Description = "Scott's Savings",
                ID = "1"
            });
            accounts.Add(new BankAccount()
            {
                Balance = 1215.00M,
                Description = "Super Savings",
                ID = "2"
            });
            return accounts;
        }
    }
}