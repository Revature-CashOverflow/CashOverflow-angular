import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../../register.service';

/**
 * This component currently contains a bootstrap section and multitude of divs to
 * display a registration form and success/failure/mismatch states.
 * @author Cameron, Amir, Chandra
 */
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  regSuccess: number = 0;
  password: string = '';
  password2: string = '';

  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private regServ: RegisterService) {}

  ngOnInit(): void {}

  /**
   * Logic checks for password mismatch then calls the service method to send form data to the Java backend.
   * Also, handles errors thrown by Java and displays either success or failure states
   * @author Cameron, Amir, Chandra
   */
  register() {
    document.getElementById('password2')?.classList.remove('is-invalid');

    if (this.password != this.password2) {
      document.getElementById('password2')?.classList.add('is-invalid');
      this.regSuccess = 0;
      return;
    }

    this.regServ.sendRegisterData(this.registerForm.value).subscribe(
      (data) => {
        console.log('Form submitted successfully');
        this.regSuccess = 1;
      },
      (error: HttpErrorResponse) => {
        this.regSuccess = 2;
      }
    );
  }
}
