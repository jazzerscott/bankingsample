using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Prototype.Banking.Users;
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
        public List<BankAccount> GetAccounts(User user)
        {
            if(user == null)
            {
                return new List<BankAccount>();
            }
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

        public List<AccountTransaction> GetAccountHistory(User user,string accountID)
        {
            List<AccountTransaction> trxns = new List<AccountTransaction>();
            if(user == null)
            {
                return trxns;
            }
            trxns.Add(new AccountTransaction()
            {
               
                Description = "Deposit",
                ID = "123131",
                Amount=2012.35M,
                Date = DateTime.Today,
                TransactionType="Deposit"
            });
            trxns.Add(new AccountTransaction()
            {

                Description = "Transfer",
                ID = "123132",
                Amount = 1012.35M,
                Date = DateTime.Today,
                TransactionType = "Transfer"
            });
            trxns.Add(new AccountTransaction()
            {

                Description = "Withdrawl",
                ID = "123133",
                Amount = 12.35M,
                Date = DateTime.Today,
                TransactionType = "Withdrawl"
            });
            trxns.Add(new AccountTransaction()
            {

                Description = "Fee",
                ID = "123134",
                Amount = 2.50M,
                Date = DateTime.Today,
                TransactionType = "Withdrawl"
            });
            trxns.Add(new AccountTransaction()
            {

                Description = "Cash Deposit",
                ID = "123135",
                Amount = 9000M,
                Date = DateTime.Today,
                TransactionType = "Deposit"
            });
            trxns.Add(new AccountTransaction()
            {

                Description = "Check # 124",
                ID = "123136",
                Amount = 100M,
                Date = DateTime.Today,
                TransactionType = "Withdrawal"
            });
            trxns.Add(new AccountTransaction()
            {

                Description = "Check #125",
                ID = "123137",
                Amount = 555M,
                Date = DateTime.Today,
                TransactionType = "Withdrawl"
            });
            trxns.Add(new AccountTransaction()
            {

                Description = "ATM Withdrawal",
                ID = "123138",
                Amount = 100M,
                Date = DateTime.Today,
                TransactionType = "Withdrawl"
            });

            return trxns;
        }
    }
}