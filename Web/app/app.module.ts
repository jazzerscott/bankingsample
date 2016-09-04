import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccountProvider } from './providers/account-provider';
import { UserProvider } from './providers/user-provider';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule }    from '@angular/http';
import { AccountSummaryPage } from './pages/account-summary';
import { AccountHistoryPage } from './pages/account-history';
import { AccountDetailComponent } from './pages/account-detail';
import { PageNotFoundPage } from './pages/page-not-found';
import { ContactUsPage } from './pages/contact-us';
import { AccountListComponent } from './components/account-list';
import { LoginPage } from './pages/login';

@NgModule({
   imports: [BrowserModule, routing, FormsModule, HttpModule],
   declarations: [AppComponent, PageNotFoundPage, AccountDetailComponent, 
    ContactUsPage, AccountSummaryPage, AccountListComponent, LoginPage, AccountHistoryPage],
   bootstrap: [ AppComponent ],
   providers: [ appRoutingProviders, AccountProvider, UserProvider ],

})
export class AppModule { }