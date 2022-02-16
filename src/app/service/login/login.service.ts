import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtDto } from 'src/app/model/jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpCli: HttpClient) {}

  retreiveLoginUser(
    loginUsername: any,
    loginPassword: any
  ): Observable<JwtDto> {
    const loginUrl = `${environment.apiURL}/login`;
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let user = {
      username: loginUsername,
      password: loginPassword,
    };

    return this.httpCli.post<JwtDto>(loginUrl, user, { headers: httpHeaders });
  }
}
