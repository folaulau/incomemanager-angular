import { AddressComponent } from './components/funnel/address/address.component';
import { ExpenseComponent } from './components/funnel/expense/expense.component';
import { IncomeComponent } from './components/funnel/income/income.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'fn/income', component: IncomeComponent },
  { path: 'fn/expense', component: ExpenseComponent },
  { path: 'fn/address', component: AddressComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
    { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
