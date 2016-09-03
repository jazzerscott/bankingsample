import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccountProvider } from './providers/account-provider';
import { UserProvider } from './providers/user-provider';
import { routing, appRoutingProviders } from './app.routing';
import { HTTP_PROVIDERS } from '@angular/http';
import { AccountSummaryComponent } from './pages/account-summary';
import { AccountDetailComponent } from './pages/account-detail';
import { PageNotFoundComponent } from './pages/page-not-found';
import { ContactUsComponent } from './pages/contact-us';
import { AccountListComponent } from './components/account-list';
import { LoginComponent } from './pages/login';

@NgModule({
   imports: [BrowserModule, routing, FormsModule],
   declarations: [AppComponent, PageNotFoundComponent, AccountDetailComponent, 
    ContactUsComponent, AccountSummaryComponent, AccountListComponent, LoginComponent],
   bootstrap: [ AppComponent ],
   providers: [ appRoutingProviders, AccountProvider, HTTP_PROVIDERS, UserProvider ],

})
export class AppModule { }