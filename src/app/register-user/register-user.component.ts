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

  regSuccess: number = 0
  password: string = ""
  password2: string = ""
  
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

      document.getElementById("mismatchNotification")?.classList.add("d-none")  

      if (this.password != this.password2) {
        document.getElementById("mismatchNotification")?.classList.remove("d-none")     
        return   
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