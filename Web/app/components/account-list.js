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
var AccountListComponent = (function () {
    function AccountListComponent() {
    }
    AccountListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AccountListComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AccountListComponent.prototype, "accounts", void 0);
    AccountListComponent = __decorate([
        core_1.Component({
            selector: 'bank-account-list',
            template: "\n    <div class='panel panel-primary'>\n        <div class='panel-heading'>\n            {{title}}\n        </div>\n        <div class='table-responsive'>\n            <table class='table'>\n                <thead>\n                    <tr>\n                        <th>Account Number</th>\n                        <th>Name</th>\n                        <th>Account type</th>\n                        <th>Balance</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let account of accounts'>\n                        \n                        <td> \n                            <a href=\"/account-history/{{account.id}}\">{{account.id}}</a>\n                        </td>\n                        <td>{{ account.description }}</td>\n                        <td>{{ account.accountType}} </td>\n                        <td>{{ account.balance | currency:'USD':true:'1.2-2' }}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n   "
        }), 
        __metadata('design:paramtypes', [])
    ], AccountListComponent);
    return AccountListComponent;
}());
exports.AccountListComponent = AccountListComponent;
//# sourceMappingURL=account-list.js.map