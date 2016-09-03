using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Prototype.Banking.Account
{
    public class AccountTransaction
    {
        public string ID { get; set; }
        public string Description { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public decimal NewBalance { get; set; }
        public string TransactionType { get; set; }
    }
}