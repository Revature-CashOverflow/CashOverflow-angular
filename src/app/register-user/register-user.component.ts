import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../../register.service';
import { Observable, ObservedValueOf } from 'rxjs';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  regSuccess: number = 0;
  passwordMismatch: number = 0;
  
  
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    // password2: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    
  });

  passwordValidate = new FormGroup({
    password2: new FormControl('')
  })
  
  constructor(
    private regServ: RegisterService
    
    ) {}
    
    ngOnInit(): void {
    }
    

    register() {
      if (this.registerForm.value.password != this.passwordValidate.value.password2) {
        this.passwordMismatch = 1;
        console.log(this.registerForm.value.password);
        console.log(this.registerForm.value.password2);
        console.log(this.passwordMismatch);
      }
      this.regServ.sendRegisterData(this.registerForm.value).subscribe(
        (data) => {
          console.log('Form submitted successfully');
          this.regSuccess = 1;
      },
      (error: HttpErrorResponse) => {
        this.regSuccess = 2;
      }
    )
  }
}
