import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserProvider } from './user-provider';
import { IUser } from './user';
import { IAccount } from './account';
import { IAccountTransaction } from './account-transaction';

@Injectable()
export class AccountProvider {
    private _accountUrl = 'http://localhost/bankingapi/api/banking/accounts';
    private _accountTrxUrl = 'http://localhost/bankingapi/api/banking/history';
    private _accountCache: IAccount[] = null;
    constructor(private _http: Http, private _userProvider: UserProvider) { }

    getAccounts(): Observable<IAccount[]> {
        if(this._accountCache != null ){
            return Observable.of(this._accountCache);
        }
        let user = this._userProvider.getCurrentUser();
        let headers = new Headers();
        if(user != null) {
            headers.append('AuthToken', user.authToken);
        }
        let options = new RequestOptions({ headers: headers });
        return this._http.get(this._accountUrl, options)
            .map((response: Response) => <IAccount[]> response.json())
            .do(data => this._accountCache = data)
            .catch(this.handleError);
    }

    getAccountTransactions(accountId: string): Observable<IAccountTransaction[]> {
        let user = this._userProvider.getCurrentUser();
        let headers = new Headers();
        if(user != null) {
            headers.append('AuthToken', user.authToken);
        }
        let options = new RequestOptions({ headers: headers });
        let url = this._accountTrxUrl+'/'+accountId;
        console.log(url);
        return this._http.get(url, options)
            .map((response: Response) => <IAccountTransaction[]> response.json())
            .catch(this.handleError);
    }

    getAccountt(id: string): Observable<IAccount> {
        return this.getAccounts()
            .map((accounts: IAccount[]) => accounts.find(p => p.id === id));
    }
    flushAccountCache(): void {
        this._accountCache=null;
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
