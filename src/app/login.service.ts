import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccountDto } from './user';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCli: HttpClient) { }

  retreiveLoginUser(loginUsername: any, loginPassword: any): Observable<UserAccountDto> {
    const loginUrl = `http://localhost:9001/login?loginUsername=${loginUsername}&loginPassword=${loginPassword}`;

    return this.httpCli.get<UserAccountDto>(loginUrl);
  }
}
