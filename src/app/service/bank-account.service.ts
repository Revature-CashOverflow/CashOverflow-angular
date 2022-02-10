import { Injectable } from '@angular/core';
import { BankAccount } from '../model/bank-account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  private getBankAccountsUrl = 'http://localhost:9001/api/account/getBankAccounts';
  private setBankAccountsUrl = 'http://localhost:9001/api/account/createBankAccount';

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private myHttpClient: HttpClient) { }

  // Update this later to send JWT
  // getUserBankAccounts(): BankAccount[]{
  //   fetch(this.bancAccountsUrl+`?id=1`)
  //   .then(
  //       function (resp) {
  //           const jsonResp = resp.json();
  //           return jsonResp;
  //       }

  //   )
  //   .then(
  //       function (resp2) {
  //           console.log(resp2);
  //           return resp2;
  //       }
  //   )
  //   .catch(
  //       (something) => { console.log("An issue occured while fetching the Fictional Character entries..."); }
  //   );
  //   return [];
  // }
  async getUserBankAccounts(): Promise<BankAccount[]> {
    try {
      const responsePayload = await fetch(this.getBankAccountsUrl + `?id=1`);
      const ourJSON = await responsePayload.json();
      return ourJSON;
    }catch(stuff){
      console.log("Something went wrong!",stuff);
      return [];
    }
  }

  async setUserBankAccounts(bankAccount: object): Promise<BankAccount[]> {
    try {
      const responsePayload = await fetch(this.setBankAccountsUrl, {method: 'POST',headers:{'Content-Type': 'application/json'}, body: JSON.stringify(bankAccount)});
      const ourJSON = await responsePayload.json();
      return ourJSON;
    }catch(stuff){
      console.log("Something went wrong!",stuff);
      return [];
    }
  }

  setUserBankAccounts2(bankAccount: object): object {
    const httpPost = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log("inside set user bank account, this is our object:", bankAccount);
    
    return this.myHttpClient.post<BankAccount>(this.setBankAccountsUrl, bankAccount, httpPost);

  }
}
