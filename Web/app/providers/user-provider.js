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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var UserProvider = (function () {
    function UserProvider(_http, _router) {
        this._http = _http;
        this._router = _router;
        this._authUrl = 'http://localhost/bankingapi/api/user/authenticate';
        this._user = null;
        this._user = JSON.parse(window.sessionStorage.getItem('user'));
        //console.log(this._user.firstName+' '+this._user.lastName);
    }
    UserProvider.prototype.authenticate = function (userName, password) {
        var _this = this;
        console.log('authenticate: ' + userName);
        return this._http.post(this._authUrl, { "userName": userName, "password": password })
            .map(function (response) {
            var result = response.json();
            if (result.success) {
                _this._user = result.user;
                window.sessionStorage.setItem("user", JSON.stringify(_this._user));
            }
            return result.success;
        })
            .catch(this.handleError);
    };
    UserProvider.prototype.getCurrentUser = function () {
        return this._user;
    };
    UserProvider.prototype.isLoggedIn = function () {
        return this._user !== null;
    };
    UserProvider.prototype.canActivate = function () {
        if (!this.isLoggedIn()) {
            this._router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    };
    UserProvider.prototype.logOut = function () {
        this._user = null;
        window.sessionStorage.removeItem('user');
        this._router.navigate(['/login']);
    };
    UserProvider.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    UserProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], UserProvider);
    return UserProvider;
}());
exports.UserProvider = UserProvider;
//# sourceMappingURL=user-provider.js.map