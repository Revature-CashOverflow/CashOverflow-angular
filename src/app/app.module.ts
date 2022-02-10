import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginService } from './services/login.service';
=======
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service'; 
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> c1a634a048b3b4fc8d85d9c2115b5e3321f71e93

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    LoginComponent  
>>>>>>> c1a634a048b3b4fc8d85d9c2115b5e3321f71e93
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    HttpClientModule
=======
    HttpClientModule,
    ReactiveFormsModule
>>>>>>> c1a634a048b3b4fc8d85d9c2115b5e3321f71e93
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
