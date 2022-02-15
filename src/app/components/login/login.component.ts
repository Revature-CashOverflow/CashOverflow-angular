import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { jwtDto } from 'src/app/model/jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginUsername: any;
   loginPassword: any;
   jwt: jwtDto | null = null;

  setCookie(key:string, value:string){
    this.cookieServ.set(key, value);
  }
   
   formdata = new FormGroup({
    loginUsername: new FormControl(),
    loginPassword: new FormControl()
 });
  constructor( private loginServ: LoginService, private cookieServ: CookieService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data: { loginUsername: any,loginPassword:any }) {
    this.loginUsername = data.loginUsername;
    this.loginPassword = data.loginPassword;
    this.retreiveLoginUserButton(this.loginUsername,this.loginPassword);
  }
    
  retreiveLoginUserButton(username: any,password: any){
    this.loginServ.retreiveLoginUser(username,password).subscribe(
      //subscriber's callback function goes here
      data=>{
        this.jwt = data;
        this.setCookie('Authorization','Bearer ' + this.jwt.jwt)
        console.log(this.cookieServ.get('Authorization'))
      }
    );
  }
}