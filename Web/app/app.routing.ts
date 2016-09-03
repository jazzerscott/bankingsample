import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { AccountSummaryComponent } from './pages/account-summary';
import { AccountDetailComponent } from './pages/account-detail';
import { PageNotFoundComponent } from './pages/page-not-found';
import { ContactUsComponent } from './pages/contact-us';
import { LoginComponent } from './pages/login';
import { UserProvider } from './providers/user-provider';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/accounts',
        pathMatch: 'full',
        canActivate: [UserProvider]
    },
    {   path: 'contact', component: ContactUsComponent, 
        data: {
            title: 'Contact Us'
        },
        canActivate: [UserProvider]
    },
    {
        path: 'accounts',
        component: AccountSummaryComponent,
        
        data: {
            title: 'Account Summary'
        },
        canActivate: [UserProvider]
    },
    { path: 'accounts/:id', component: AccountDetailComponent, canActivate: [UserProvider]},
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);