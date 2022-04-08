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
    //if(this.auth.user$ | async as user);
    this.auth.user$.subscribe(
      (data) => {
        console.log(data);
      },
      (msg) => {
        console.log(msg);
      }
    );
    this.auth.user$.subscribe(
      (profile) => {
        this.profileJson = JSON.stringify(profile, null, 2);
        console.log("Get users");
        console.log(this.profileJson);
        console.log(profile);
      }
    );
    this.api.ping$().subscribe({
      next: (res) => {
        this.hasApiError = false;
        this.responseJson = JSON.stringify(res, null, 2).trim();
      },
      error: () => this.hasApiError = true,
    });
    console.log(this.profileJson);

    this.auth.idTokenClaims$.subscribe((claims) => console.log(claims));
    this.auth.error$.subscribe((error) => console.log(error));

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
    this.auth.loginWithRedirect();
    this.auth.idTokenClaims$.subscribe((claims) => console.log(claims));


  }

  /*
  Error!Payload validation error:
  'Object didn't pass validation for format absolute-https-uri-or-empty:
   https://localhost:4200/login' on property initiate_login_uri (Initiate login uri, must be https).
  */



  success(): void {
    this.toastr.success('Login Success!', `You have been successfully logged in as: ${this.loginUsername}`);
  }

  error(): void {
    this.toastr.error('Login Error', 'Password/Username authentication error');
  }

}
