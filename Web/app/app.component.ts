import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { UserProvider } from "./providers/user-provider"
//import 'rxjs/Rx';   // Load all features
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Component({
    selector: 'banking-app',
    template:  `
        <div>
        <nav class="navbar navbar-default">
             <div class="container-fluid">
                <a class="navbar-brand">{{title}}</a>
                <ul class="nav navbar-nav">
                    <li *ngIf='this._userProvider.isLoggedIn()' ><a routerLink="/accounts" routerLinkActive="active">Accounts</a></li>
                    <li *ngIf='this._userProvider.isLoggedIn()' ><a routerLink="/contact" routerLinkActive="active">Contact Us</a></li>
                    <li *ngIf='this._userProvider.isLoggedIn()' ><a href="#" (click)="onLogOut()">Log Out</a></li>
                </ul>
            </div>
        </nav>
        </div>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        `
})
export class AppComponent { 
    pageTitle: string = "Banking";
    constructor(private _userProvider: UserProvider){}

    onLogOut(): void {
        this._userProvider.logOut();
    }
}