import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient:HttpClient) { }

  sendEmailBasic(email){
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', `${environment.apiURL}/sendemail`);
    let options = { headers: headers };

    this.httpClient.post(`${environment.apiURL}/sendemail`, email, options)
  }

  createEmailSubject(form){

    return `Transfer of mooney to account ${form.transferToAccount}`

  }

  createEmailBody(form){

    return `The ammount ${form.transferAmount} has been transfered from account number ${form.transferFromAccount} to the account number ${form.transferToAccount} \n\n Thank you For using CashOverflow.`

  }
}
