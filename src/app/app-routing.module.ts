import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBankAccountFormComponent } from './createBankAccountForm/create-bank-account-form/create-bank-account-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedComponent } from './feed/feed.component';
import { CanActivateRouteGuard } from './guard/can-activate-route.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'feed', component: FeedComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'createBankAccountForm', component: CreateBankAccountFormComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'register', component: RegisterUserComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '/feed' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
