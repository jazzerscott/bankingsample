import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IAccount } from './account';

@Injectable()
export class AccountProvider {
    private _accountUrl = 'http://localhost/bankingapi/api/banking/accounts';

    constructor(private _http: Http) { }

    getAccounts(): Observable<IAccount[]> {
        return this._http.get(this._accountUrl)
            .map((response: Response) => <IAccount[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAccountt(id: string): Observable<IAccount> {
        return this.getAccounts()
            .map((accounts: IAccount[]) => accounts.find(p => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
