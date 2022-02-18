import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncomeExpenseService {

  constructor(
    private http: HttpClient

  ) { }

  /**
   * Added headers to cope with CORS errors
   * @author Cameron, Amir, Chandra
   */
   sendTransactionData(transactionForm) {
    
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:4200/register');
     let options = { headers: headers };
  
    return this.http.post('http://localhost:9001/register', transactionForm, options);
    
  }
}
