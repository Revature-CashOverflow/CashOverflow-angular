import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(
    private http: HttpClient

  ) { }

  sendRegisterData(registerForm) {
    
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:4200/register');
     let options = { headers: headers };
  
    return this.http.post('http://localhost:9001/register', registerForm, options);
    
  }

}
