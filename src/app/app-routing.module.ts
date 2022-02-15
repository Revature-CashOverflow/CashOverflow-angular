import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBankAccountFormComponent } from './createBankAccountForm/create-bank-account-form/create-bank-account-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'createBankAccountForm', component: CreateBankAccountFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
