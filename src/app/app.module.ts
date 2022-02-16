import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedComponent } from './feed/feed.component';
import { CreateBankAccountFormComponent } from './createBankAccountForm/create-bank-account-form/create-bank-account-form.component';
import { DashboardLoggedComponent } from './dashboard-logged/dashboard-logged.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterService } from 'src/register.service';
import { IncomeExpenseComponent } from './income-expense/income-expense.component';
import { IncomeExpenseService } from './income-expense.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FeedComponent,
    CreateBankAccountFormComponent,
    LoginComponent,
    DashboardLoggedComponent,
    RegisterUserComponent,
    IncomeExpenseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RegisterService, IncomeExpenseService],

  bootstrap: [AppComponent]
})
export class AppModule { }
