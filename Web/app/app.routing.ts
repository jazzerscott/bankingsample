import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { AccountSummaryComponent } from './pages/account-summary';
import { AccountDetailComponent } from './pages/account-detail';
import {PageNotFoundComponent } from './pages/page-not-found';
import { ContactUsComponent } from './pages/contact-us';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/accounts',
        pathMatch: 'full'
    },
    {   path: 'contact', component: ContactUsComponent, 
        data: {
            title: 'Contact Us'
        } 
    },
    {
        path: 'accounts',
        component: AccountSummaryComponent,
        
        data: {
        title: 'Account Summary'
        }
  },
  { path: 'accounts/:id', component: AccountDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);