import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  constructor(private httpCli: HttpClient) {}

  // private loginUrl = `http://localhost:4200/login`;

  doLogin(loginUsername: string, loginPassword: string): Observable<string> {
    console.log("in service")
    console.log("loginUsername===>", loginUsername);
    return this.httpCli.get<string>(`http://localhost:4200/login`);
  }
}
