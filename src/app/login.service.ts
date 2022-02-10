import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccountDto } from './user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCli: HttpClient) { }

  retreiveLoginUser(loginUsername: any, loginPassword: any): Observable<UserAccountDto> {
    const loginUrl = `http://localhost:1901/login`;
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let user = {
      id: null,
      email: null,
      username: loginUsername,
      firstName: null,
      lastName: null,
      password: loginPassword,
      creationDate: null
    }


    return this.httpCli.post<UserAccountDto>(loginUrl, user, { headers: httpHeaders });
  }
}
