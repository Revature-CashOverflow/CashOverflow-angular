import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { JwtDto } from 'src/app/model/jwt';
import { Router } from '@angular/router';
import { AuthClientConfig, AuthService } from '@auth0/auth0-angular';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUsername: any;
  loginPassword: any;
  jwt: JwtDto | null = null;
  showErrorMessage: boolean = false;

  responseJson: string ="";
  audience = this.configFactory.get()?.audience;
  hasApiError = false;
  profileJson: string = "";

  setCookie(key: string, value: string) {
    this.cookieServ.set(key, value, undefined, "/");
  }

  formdata = new FormGroup({
    loginUsername: new FormControl(),
    loginPassword: new FormControl(),
  });
  constructor(
    private loginServ: LoginService,
    private cookieServ: CookieService,
    private router: Router,
    public auth: AuthService,
    private api: ApiService,
    private toastr: ToastrService,
    private configFactory: AuthClientConfig
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        (this.profileJson = JSON.stringify(profile, null, 2));
        console.log(this.profileJson);

      }
    )

  }

  onClickSubmit(data: { loginUsername: any; loginPassword: any }) {
    this.loginUsername = data.loginUsername;
    this.loginPassword = data.loginPassword;
    sessionStorage.setItem('username', this.loginUsername)
    sessionStorage.setItem('password', this.loginPassword)
    this.retreiveLoginUserButton(this.loginUsername, this.loginPassword);


  }

  retreiveLoginUserButton(username: any, password: any) {
    this.loginServ.retreiveLoginUser(username, password).subscribe(
      //subscriber's callback function goes here
      (data) => {
        this.jwt = data;
        this.setCookie('token', 'Bearer ' + this.jwt.jwt);
        this.router.navigate(['/feed']);
        this.success();
      },
      (msg) => {
        this.showErrorMessage = true;
        this.error();
      }
    );



  }

  loginWithAuth() {
    this.auth.loginWithPopup();
  }

  success(): void {
    this.toastr.success('Login Success!', `You have been successfully logged in as: ${this.loginUsername}`);
  }

  error(): void {
    this.toastr.error('Login Error', 'Password/Username authentication error');
  }

}
