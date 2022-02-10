<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
=======
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UserAccountDto } from '../user';
import { FormGroup, FormControl } from '@angular/forms';
>>>>>>> c1a634a048b3b4fc8d85d9c2115b5e3321f71e93

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
<<<<<<< HEAD
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUsername: string = 'dummy';
  loginPassword: string = 'password';

  constructor(private loginServ: LoginService) {}

  ngOnInit(): void {}

  login() {
    console.log('login button clicked');
    console.log('this.loginUsername===>', this.loginUsername);

    this.loginServ
      .doLogin(this.loginUsername, this.loginPassword)
      .subscribe((data) => {
        console.log("data===>", data);
      });
    // this.router.navigate([/home]);
=======
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   currentUser: UserAccountDto| null = null;
   loginUsername: any;
   loginPassword: any;
   
   formdata = new FormGroup({
    loginUsername: new FormControl(),
    loginPassword: new FormControl()
 });
  constructor( private loginServ: LoginService) { }

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
        this.currentUser= data;
        console.log(data);
     
       // this.currentUser= data;
      }
    );
>>>>>>> c1a634a048b3b4fc8d85d9c2115b5e3321f71e93
  }
}
