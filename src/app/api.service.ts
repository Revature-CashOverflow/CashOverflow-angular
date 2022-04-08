import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import * as config from '../../auth_config.json';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  ping$(): Observable<any> {
    console.log("http://localhost:3001");
    return this.http.get(`http://localhost:3001/api/external`);
  }
}
