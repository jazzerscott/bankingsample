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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var account_provider_1 = require('./providers/account-provider');
var user_provider_1 = require('./providers/user-provider');
var app_routing_1 = require('./app.routing');
var http_1 = require('@angular/http');
var account_summary_1 = require('./pages/account-summary');
var account_history_1 = require('./pages/account-history');
var account_detail_1 = require('./pages/account-detail');
var page_not_found_1 = require('./pages/page-not-found');
var contact_us_1 = require('./pages/contact-us');
var account_list_1 = require('./components/account-list');
var login_1 = require('./pages/login');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, forms_1.FormsModule, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, page_not_found_1.PageNotFoundPage, account_detail_1.AccountDetailComponent,
                contact_us_1.ContactUsPage, account_summary_1.AccountSummaryPage, account_list_1.AccountListComponent, login_1.LoginPage, account_history_1.AccountHistoryPage],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_routing_1.appRoutingProviders, account_provider_1.AccountProvider, user_provider_1.UserProvider],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map