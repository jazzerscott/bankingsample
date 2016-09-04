import { Component, OnInit } from '@angular/core';
import { IAccountTransaction } from '../providers/account-transaction';
import { AccountProvider } from '../providers/account-provider';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
     <div class='panel panel-primary'>
        <div class='panel-heading'>
            {{title}}
        </div>
        <div class='table-responsive'>
            <table class='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor='let trx of trxns'>
                        
                        <td> 
                            {{trx.date | date: 'MM/dd/yy'}}
                        </td>
                        <td>{{ trx.description }}</td>
                        <td>{{ trx.amount | currency:'USD':true:'1.2-2' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
   `
})
export class AccountHistoryPage implements OnInit { 
    pageTitle: string = 'Account History';
    errorMessage: string;
    trxns: IAccountTransaction[];
    accountId: string;
    
    
    constructor(private _accountProvider: AccountProvider,  private _route: ActivatedRoute){

    }
    
    
    ngOnInit(): void {
        this.accountId = this._route.snapshot.params['accountId'];
        this._accountProvider.getAccountTransactions(this.accountId)
                     .subscribe(
                       trxns => this.trxns = trxns,
                       error =>  this.errorMessage = <any>error);
                       
    }
}