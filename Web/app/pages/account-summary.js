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
var account_provider_1 = require('../providers/account-provider');
var AccountSummaryComponent = (function () {
    function AccountSummaryComponent(_accountProvider) {
        this._accountProvider = _accountProvider;
        this.pageTitle = 'Account Summary';
    }
    AccountSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._accountProvider.getAccounts()
            .subscribe(function (accounts) { return _this.accounts = accounts; }, function (error) { return _this.errorMessage = error; });
    };
    AccountSummaryComponent = __decorate([
        core_1.Component({
            template: "\n    <div class='panel panel-primary'>\n        <div class='panel-heading'>\n            Account Summary\n        </div>\n        <div class='table-responsive'>\n            <table class='table'>\n                <thead>\n                    <tr>\n                        <th>Account Number</th>\n                        <th>Name</th>\n                        <th>Balance</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let account of accounts'>\n                        \n                        <td> \n                            {{account.id}}\n                        </td>\n                        <td>{{ account.description }}</td>\n                        <td>{{ account.balance | currency:'USD':true:'1.2-2' }}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n   "
        }), 
        __metadata('design:paramtypes', [account_provider_1.AccountProvider])
    ], AccountSummaryComponent);
    return AccountSummaryComponent;
}());
exports.AccountSummaryComponent = AccountSummaryComponent;
//# sourceMappingURL=account-summary.js.map