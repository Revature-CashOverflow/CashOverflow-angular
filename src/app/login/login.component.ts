import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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
  }
}
