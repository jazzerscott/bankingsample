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
                Balance = 51015.00M,
                Description = "Scott's Savings",
                ID = "10056-S00",
                AccountType ="Savings"
            });
            accounts.Add(new BankAccount()
            {
                Balance = 13215.00M,
                Description = "Super Checking",
                ID = "10056-S10",
                AccountType = "Checking"
            });
            accounts.Add(new BankAccount()
            {
                Balance = 11215.00M,
                Description = "Max Money Market",
                ID = "10056-S50",
                AccountType = "Savings"
            });
            accounts.Add(new BankAccount()
            {
                Balance = 120015.00M,
                Description = "Home Mortgage",
                ID = "10056-L01",
                AccountType = "Loan"
            });
            accounts.Add(new BankAccount()
            {
                Balance = 5215.00M,
                Description = "Car Loan",
                ID = "10056-L02",
                AccountType = "Loan"
            });
            return accounts;
        }

        public List<AccountTransaction> GetHistory(string accountID)
        {
            List<AccountTransaction> trxns = new List<AccountTransaction>();
            trxns.Add(new AccountTransaction()
            {
               
                Description = "Payroll Deposit",
                ID = "123131",
                Amount=2012.35M,
                Date = DateTime.Today,
                TransactionType="Deposit"
            });
            
            return trxns;
        }
    }
}