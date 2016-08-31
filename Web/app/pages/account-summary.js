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
    AccountSummaryComponent.prototype.setAccounts = function (accounts) {
        this.deposits = accounts.filter(function (value) { return value.accountType === "Savings" || value.accountType === "Checking"; });
        this.loans = accounts.filter(function (value) { return value.accountType === "Loan"; });
    };
    AccountSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._accountProvider.getAccounts()
            .subscribe(function (accounts) { return _this.setAccounts(accounts); }, function (error) { return _this.errorMessage = error; });
    };
    AccountSummaryComponent = __decorate([
        core_1.Component({
            template: "\n    <div>\n        <bank-account-list title=\"Deposit Accounts\"  [accounts]='deposits'></bank-account-list>\n        <bank-account-list title=\"Loans\" [accounts]='loans'></bank-account-list>\n    </div>\n   "
        }), 
        __metadata('design:paramtypes', [account_provider_1.AccountProvider])
    ], AccountSummaryComponent);
    return AccountSummaryComponent;
}());
exports.AccountSummaryComponent = AccountSummaryComponent;
//# sourceMappingURL=account-summary.js.map