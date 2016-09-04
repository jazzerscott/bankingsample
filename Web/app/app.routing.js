"use strict";
var router_1 = require('@angular/router');
var account_summary_1 = require('./pages/account-summary');
var page_not_found_1 = require('./pages/page-not-found');
var contact_us_1 = require('./pages/contact-us');
var login_1 = require('./pages/login');
var user_provider_1 = require('./providers/user-provider');
var account_history_1 = require('./pages/account-history');
var appRoutes = [
    {
        path: '',
        redirectTo: '/accounts',
        pathMatch: 'full',
        canActivate: [user_provider_1.UserProvider]
    },
    { path: 'contact', component: contact_us_1.ContactUsPage,
        data: {
            title: 'Contact Us'
        },
        canActivate: [user_provider_1.UserProvider]
    },
    {
        path: 'accounts',
        component: account_summary_1.AccountSummaryPage,
        data: {
            title: 'Account Summary'
        },
        canActivate: [user_provider_1.UserProvider]
    },
    {
        path: 'account-history/:accountId',
        component: account_history_1.AccountHistoryPage,
        data: {
            title: 'Account History'
        },
        canActivate: [user_provider_1.UserProvider]
    },
    { path: 'login', component: login_1.LoginPage },
    { path: '**', component: page_not_found_1.PageNotFoundPage }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map