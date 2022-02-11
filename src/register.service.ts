import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(
    private http: HttpClient

  ) { }

  sendRegisterData(registerForm) {
    return this.http.post('http://localhost:9001/register', registerForm);
    
  }

}
