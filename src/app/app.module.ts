import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { IncomeComponent } from './components/funnel/income/income.component';
import { ExpenseComponent } from './components/funnel/expense/expense.component';
import { ProfileComponent } from './components/funnel/profile/profile.component';
import { DashComponent } from './components/dash/dash.component';
import { SpendingComponent } from './components/spending/spending.component';
import { SideNavComponent } from './layouts/dash/side-nav/side-nav.component';
import { BreadcrumbComponent } from './layouts/dash/breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    IncomeComponent,
    ExpenseComponent,
    ProfileComponent,
    DashComponent,
    SpendingComponent,
    SideNavComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
