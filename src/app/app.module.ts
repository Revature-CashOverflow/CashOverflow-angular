import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterService } from 'src/register.service';
import { IncomeExpenseComponent } from './income-expense/income-expense.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './service/login/login.service'; 
import { IncomeExpenseService } from './income-expense.service';


@NgModule({
  declarations: [
    AppComponent,
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
  providers: [RegisterService, IncomeExpenseService],

  bootstrap: [AppComponent]
})
export class AppModule { }
