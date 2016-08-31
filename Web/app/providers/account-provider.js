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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var AccountProvider = (function () {
    function AccountProvider(_http) {
        this._http = _http;
        this._accountUrl = 'http://localhost/bankingapi/api/banking/accounts';
        this._accountCache = null;
    }
    AccountProvider.prototype.getAccounts = function () {
        var _this = this;
        if (this._accountCache != null) {
            return Observable_1.Observable.of(this._accountCache);
        }
        return this._http.get(this._accountUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return _this._accountCache = data; })
            .catch(this.handleError);
    };
    AccountProvider.prototype.getAccountt = function (id) {
        return this.getAccounts()
            .map(function (accounts) { return accounts.find(function (p) { return p.id === id; }); });
    };
    AccountProvider.prototype.flushAccountCache = function () {
        this._accountCache = null;
    };
    AccountProvider.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    AccountProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AccountProvider);
    return AccountProvider;
}());
exports.AccountProvider = AccountProvider;
//# sourceMappingURL=account-provider.js.map