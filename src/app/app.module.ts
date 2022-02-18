import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { TransferMoneyOwnedComponent } from './components/transfer-money-owned/transfer-money-owned.component';
import { CreateBankAccountFormComponent } from './components/create-bank-account-form/create-bank-account-form.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterService } from 'src/app/service/register/register.service';
import { IncomeExpenseComponent } from './components/income-expense/income-expense.component';
import { IncomeExpenseService } from './service/incomeExpense/income-expense.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthService } from './service/auth/auth-service.service';
import { CanActivateRouteGuard } from './components/guard/can-activate-route.guard';
import { LoginPageComponent } from './page-layouts/login-page/login-page.component';
import { UserPageComponent } from './page-layouts/user-page/user-page.component';
import { RegisterPageComponent } from './page-layouts/register-page/register-page.component';
import { NavbarLoginComponent } from './components/navbar-login/navbar-login.component';
import { NavbarGeneralComponent } from './components/navbar-general/navbar-general.component';
import { BankAccountRegisterPageComponent } from './page-layouts/bank-account-register-page/bank-account-register-page.component';
import { BankAccountPageComponent } from './page-layouts/bank-account-page/bank-account-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    CreateBankAccountFormComponent,
    LoginComponent,
    RegisterUserComponent,
    IncomeExpenseComponent,
    LogoutComponent,
    TransferMoneyOwnedComponent,
    LoginPageComponent,
    UserPageComponent,
    RegisterPageComponent,
    NavbarLoginComponent,
    NavbarGeneralComponent,
    BankAccountRegisterPageComponent,
    BankAccountPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    JwtModule,
  ],
  providers: [
    RegisterService,
    IncomeExpenseService,
    AuthService,
    CanActivateRouteGuard,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
