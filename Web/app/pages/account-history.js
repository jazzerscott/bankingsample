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
var router_1 = require('@angular/router');
var AccountHistoryPage = (function () {
    function AccountHistoryPage(_accountProvider, _route) {
        this._accountProvider = _accountProvider;
        this._route = _route;
        this.pageTitle = 'Account History';
    }
    AccountHistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.accountId = this._route.snapshot.params['accountId'];
        this._accountProvider.getAccountTransactions(this.accountId)
            .subscribe(function (trxns) { return _this.trxns = trxns; }, function (error) { return _this.errorMessage = error; });
    };
    AccountHistoryPage = __decorate([
        core_1.Component({
            template: "\n     <div class='panel panel-primary'>\n        <div class='panel-heading'>\n            {{title}}\n        </div>\n        <div class='table-responsive'>\n            <table class='table'>\n                <thead>\n                    <tr>\n                        <th>Date</th>\n                        <th>Description</th>\n                        <th>Amount</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let trx of trxns'>\n                        \n                        <td> \n                            {{trx.date | date: 'MM/dd/yy'}}\n                        </td>\n                        <td>{{ trx.description }}</td>\n                        <td>{{ trx.amount | currency:'USD':true:'1.2-2' }}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n   "
        }), 
        __metadata('design:paramtypes', [account_provider_1.AccountProvider, router_1.ActivatedRoute])
    ], AccountHistoryPage);
    return AccountHistoryPage;
}());
exports.AccountHistoryPage = AccountHistoryPage;
//# sourceMappingURL=account-history.js.map