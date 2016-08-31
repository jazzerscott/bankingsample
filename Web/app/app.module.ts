import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccountProvider } from './providers/account-provider';
import { routing, appRoutingProviders } from './app.routing';
import { HTTP_PROVIDERS } from '@angular/http';
import { AccountSummaryComponent } from './pages/account-summary';
import { AccountDetailComponent } from './pages/account-detail';
import { PageNotFoundComponent } from './pages/page-not-found';
import { ContactUsComponent } from './pages/contact-us';

@NgModule({
   imports: [BrowserModule, routing],
   declarations: [AppComponent, PageNotFoundComponent, AccountDetailComponent, ContactUsComponent, AccountSummaryComponent],
   bootstrap: [ AppComponent ],
   providers: [appRoutingProviders, AccountProvider, HTTP_PROVIDERS],

})
export class AppModule { }