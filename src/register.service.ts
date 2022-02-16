import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './environments/environment';

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
    const headers = new HttpHeaders()
      .set('content-type', 'application/json');
    let options = { headers: headers };

    return this.http.post(
      `${environment.apiURL}/register`,
      registerForm,
      options
    );
  }
}
