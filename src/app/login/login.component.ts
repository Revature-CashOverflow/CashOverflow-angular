import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "dummy";
  password = "password";

  constructor(
    private loginService: LoginService
  ) {  }

  ngOnInit(): void {
  }

  onSubmit() { 
    console.log("before");
    this.loginService.login(this.username,this.password).subscribe((data)=>{
      console.log(data);
    });
    console.log("after");
   
  }

}
