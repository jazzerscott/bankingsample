import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IAuthenticationResponse } from "./authentication-response";
import { IUser } from './user';

@Injectable()
export class UserProvider {
    private _authUrl: string = 'http://localhost/bankingapi/api/user/authenticate';
    private _user: IUser = null;

    constructor(private _http: Http, private _router: Router) {
        this._user = JSON.parse(window.sessionStorage.getItem('user'));
        //console.log(this._user.firstName+' '+this._user.lastName);
    }

    authenticate(userName: string,password: string): Observable<IAuthenticationResponse> {
        console.log('authenticate: '+userName);
        return this._http.post(this._authUrl,{"userName": userName, "password": password })
            .map((response: Response) => {
                let result = <IAuthenticationResponse> response.json();
                if (result.success) {
                    this._user = result.user;
                    window.sessionStorage.setItem("user",JSON.stringify(this._user));
                }
                return result.success;
            })
            .catch(this.handleError);
    }
    
    isLoggedIn() {
        return this._user !== null;
    }
    canActivate() {
        if(!this.isLoggedIn()){
            this._router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    }
    logOut(): void {
        this._user = null;
        window.sessionStorage.removeItem('user');
        this._router.navigate(['/login']);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}