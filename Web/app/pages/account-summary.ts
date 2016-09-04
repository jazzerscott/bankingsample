import { Component, OnInit } from '@angular/core';
import { IAccount } from '../providers/account';
import { AccountProvider } from '../providers/account-provider';
import { AccountListComponent } from '../components/account-list';

@Component({
    template: `
    <div>
        <bank-account-list title="Deposit Accounts"  [accounts]='deposits'></bank-account-list>
        <bank-account-list title="Loans" [accounts]='loans'></bank-account-list>
    </div>
   `
})
export class AccountSummaryPage implements OnInit{ 
    pageTitle: string = 'Account Summary';
    errorMessage: string;
    //accounts: IAccount[];
    loans: IAccount[];
    deposits: IAccount[];
    constructor(private _accountProvider: AccountProvider){

    }
    setAccounts(accounts: IAccount[]): void{
        this.deposits = accounts.filter(value => value.accountType==="Savings" || value.accountType==="Checking");
        this.loans = accounts.filter(value => value.accountType==="Loan");
    }
    
    ngOnInit(): void {
           this._accountProvider.getAccounts()
                     .subscribe(
                       accounts =>this.setAccounts(accounts),
                       error =>  this.errorMessage = <any>error);
    }
}