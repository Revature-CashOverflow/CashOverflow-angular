import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBankAccountFormComponent } from './components/create-bank-account-form/create-bank-account-form.component';
import { UserPageComponent } from './page-layouts/user-page/user-page.component';
import { CanActivateRouteGuard } from './components/guard/can-activate-route.guard';
import { LoginPageComponent } from './page-layouts/login-page/login-page.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterPageComponent } from './page-layouts/register-page/register-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'feed', component: UserPageComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'createBankAccountForm', component: CreateBankAccountFormComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'register', component: RegisterPageComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '/feed' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
