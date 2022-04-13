import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { JwtDto } from 'src/app/model/jwt';
import { Router } from '@angular/router';
import { AuthClientConfig, AuthService } from '@auth0/auth0-angular';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/api.service';
import { RegisterService } from 'src/app/service/register/register.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUsername: any;
  loginPassword: any;
  data;//Used for logging in w/ auth0 purposes
  jwt: JwtDto | null = null;
  showErrorMessage: boolean = false;
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  audience = this.configFactory.get()?.audience;
  hasApiError = false;
  // profileJson: string = "";
  loggedInWithAuth0: boolean = false;

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
    private configFactory: AuthClientConfig,
    private regServ: RegisterService,
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {

        //This isn't used anywhere, but it might be nice to save this
        // (this.profileJson = JSON.stringify(profile, null, 2));
        //These 2 should always exist
        //If not, something about auth0 is weird and will need debugging
        this.loginUsername = profile?.nickname;
        //A security concern, should be fixed someother way
        //Perhaps let the database register users without passwords?
        this.loginPassword = profile?.sub;
        //Login  for signing in
        this.data = {
          loginUsername: this.loginUsername+this.loginPassword,//This ensures all usernames are unique
          loginPassword:this.loginPassword
        };
        this.data.loginUsername = this.data.loginUsername.substring(0, 19);//A username can only be 20 characters long
        //regristration info, shouldn't be used unless actually regristering though
        this.registerForm.setValue({
          username: this.data.loginUsername,
          password: this.loginPassword,
          firstName: (profile?.given_name || "fName"),
          lastName: profile?.family_name || "LName",
          //This should always have an email, unless auth0 allows a service that doesn't have emails
          //If so, the email will be default to that
          email: profile?.email || "fake@mail.com"
        })
        this.loggedInWithAuth0 = true;
        // console.log("Only works if there is a user?");
        // console.log(this.profileJson);
         this.onClickSubmit(this.data);
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
        if (!this.loggedInWithAuth0) {
        this.showErrorMessage = true;
        }
        this.error();
      }
    );



  }

  loginWithAuth() {
    this.loggedInWithAuth0 = true;
    this.auth.loginWithPopup();
  }

  success(): void {
    this.toastr.success('Login Success!', `You have been successfully logged in as: ${this.loginUsername}`);
  }

  error(): void {
    if (!this.loggedInWithAuth0) {
      this.toastr.error('Login Error', 'Password/Username authentication error');
    }
    else {

      //This should only ever run if a user is not already registered
      //In the database with Auth0

      //Also, no idea why, but this needs to be here
      //Don't remove unless you want to debug this
      for(let item in this.registerForm){
      if(item){
      }
      }

      this.regServ.sendRegisterData(this.registerForm.value).subscribe(
        (data) => {
              //No reason to show a succesful regristration
              //For when you are logging in through Auth0
              // this.success(sl);
              this.onClickSubmit(this.data);
          },
          (error: HttpErrorResponse) => {
            this.auth0Error();
            console.log("Can't register for some reason");

          }
        );
    }

  }
  auth0Error(): void {
    this.toastr.error('Register Error', 'Unable to register an account with Auth0. Please try again later or contact technical support.');
  }

}
