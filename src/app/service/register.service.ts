import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
<<<<<<< HEAD:src/app/service/register.service.ts
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

=======
import { environment } from './environments/environment';
>>>>>>> 77e0319841e07fb59e9c525b53f1a28df81ff847:src/register.service.ts

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  /**
   * Added headers to cope with CORS errors
   * @author Cameron, Amir, Chandra
   */
  sendRegisterData(registerForm) {
<<<<<<< HEAD:src/app/service/register.service.ts
    
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', `${environment.apiURL}/register`);
     let options = { headers: headers };
  
    return this.http.post(`${environment.apiURL}/register`, registerForm, options);
    
  }
=======
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
>>>>>>> 77e0319841e07fb59e9c525b53f1a28df81ff847:src/register.service.ts

    return this.http.post(`${environment.apiURL}/register`, registerForm, {
      headers: httpHeaders,
    });
  }
}
