import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccountDto } from './user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpCli: HttpClient) {}

  retreiveLoginUser(
    loginUsername: any,
    loginPassword: any
  ): Observable<UserAccountDto> {
    let user: UserAccountDto = {
      username: loginUsername,
      password: loginPassword,
    };

    console.log("user===>", user);

    const loginUrl = `http://localhost:9001/login`;

    console.log(loginUrl);

    return this.httpCli.post<UserAccountDto>(loginUrl, user);
  }
}
