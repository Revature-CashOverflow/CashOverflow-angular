import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // currentUser: User| null = null;
   loginUsername: any;
   loginPassword: any;
   //formdata: any;
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
        console.log(data);
        console.log(data.username);
       // this.currentUser= data;
      }
    );
  }
}
