import { Component, OnInit } from '@angular/core';
import { IAccount } from '../providers/account';
import { AccountProvider } from '../providers/account-provider';

@Component({
    template: `
    <div class='panel panel-primary'>
        <div class='panel-heading'>
            Account Summary
        </div>
        <div class='table-responsive'>
            <table class='table'>
                <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>Name</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor='let account of accounts'>
                        
                        <td> 
                            {{account.id}}
                        </td>
                        <td>{{ account.description }}</td>
                        <td>{{ account.balance | currency:'USD':true:'1.2-2' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
   `
})
export class AccountSummaryComponent implements OnInit{ 
    pageTitle: string = 'Account Summary';
    errorMessage: string;
    accounts: IAccount[];
    constructor(private _accountProvider: AccountProvider){

    }
    ngOnInit(): void {
           this._accountProvider.getAccounts()
                     .subscribe(
                       accounts => this.accounts = accounts,
                       error =>  this.errorMessage = <any>error);
    }
}