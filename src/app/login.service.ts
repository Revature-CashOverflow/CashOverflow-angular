import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}

    public login(username:string, password:string){
      let httpHeaders = new HttpHeaders()
                         .set('Accept', 'application/json');
      let httpParams = new HttpParams()
                            .set('loginUsername', username)
                            .set('loginPassword', password);
      return this.httpClient.get('http://localhost:1901/login', {
          headers: httpHeaders,
          params: httpParams,
          responseType:'json'
      });
    }
   
}
