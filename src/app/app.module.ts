import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterService } from './service/register.service';
import { IncomeExpenseComponent } from './components/income-expense/income-expense.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './service/login/login.service'; 
import { IncomeExpenseService } from './service/income-expense.service';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    IncomeExpenseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RegisterService, IncomeExpenseService, LoginService, CookieService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
