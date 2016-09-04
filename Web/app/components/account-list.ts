import { Component, OnInit, Input } from '@angular/core';
import { IAccount } from '../providers/account';

@Component({
    selector:'bank-account-list',
    template: `
    <div class='panel panel-primary'>
        <div class='panel-heading'>
            {{title}}
        </div>
        <div class='table-responsive'>
            <table class='table'>
                <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>Name</th>
                        <th>Account type</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor='let account of accounts'>
                        
                        <td> 
                            <a href="/account-history/{{account.id}}">{{account.id}}</a>
                        </td>
                        <td>{{ account.description }}</td>
                        <td>{{ account.accountType}} </td>
                        <td>{{ account.balance | currency:'USD':true:'1.2-2' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
   `
})
export class AccountListComponent implements OnInit{ 
    @Input() title: string;
    @Input() accounts: IAccount[];
    errorMessage: string;
    
    ngOnInit(): void {
       
    }
}