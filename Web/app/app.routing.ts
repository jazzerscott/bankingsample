import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { AccountSummaryPage } from './pages/account-summary';

import { PageNotFoundPage } from './pages/page-not-found';
import { ContactUsPage } from './pages/contact-us';
import { LoginPage } from './pages/login';
import { UserProvider } from './providers/user-provider';
import { AccountHistoryPage } from './pages/account-history';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/accounts',
        pathMatch: 'full',
        canActivate: [UserProvider]
    },
    {   path: 'contact', component: ContactUsPage, 
        data: {
            title: 'Contact Us'
        },
        canActivate: [UserProvider]
    },
    {
        path: 'accounts',
        component: AccountSummaryPage,
        
        data: {
            title: 'Account Summary'
        },
        canActivate: [UserProvider]
    },
    {
        path: 'account-history/:accountId',
        component: AccountHistoryPage,
        
        data: {
            title: 'Account History'
        },
        canActivate: [UserProvider]
    },
    { path: 'login', component: LoginPage },
    { path: '**', component: PageNotFoundPage }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);