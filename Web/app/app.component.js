"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_provider_1 = require("./providers/user-provider");
//import 'rxjs/Rx';   // Load all features
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
require('rxjs/add/operator/map');
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/toPromise';
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
var AppComponent = (function () {
    function AppComponent(_userProvider) {
        this._userProvider = _userProvider;
        this.pageTitle = "Banking";
    }
    AppComponent.prototype.onLogOut = function () {
        this._userProvider.logOut();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'banking-app',
            template: "\n        <div>\n        <nav class=\"navbar navbar-default\">\n             <div class=\"container-fluid\">\n                <a class=\"navbar-brand\">{{title}}</a>\n                <ul class=\"nav navbar-nav\">\n                    <li *ngIf='this._userProvider.isLoggedIn()' ><a routerLink=\"/accounts\" routerLinkActive=\"active\">Accounts</a></li>\n                    <li *ngIf='this._userProvider.isLoggedIn()' ><a routerLink=\"/contact\" routerLinkActive=\"active\">Contact Us</a></li>\n                    <li *ngIf='this._userProvider.isLoggedIn()' ><a href=\"#\" (click)=\"onLogOut()\">Log Out</a></li>\n                </ul>\n            </div>\n        </nav>\n        </div>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [user_provider_1.UserProvider])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map