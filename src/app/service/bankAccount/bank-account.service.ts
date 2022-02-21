import { Injectable } from '@angular/core';
import { BankAccount } from '../../model/bank-account';
import { FundTransfer } from 'src/app/model/fund-transfer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { Transaction } from 'src/app/model/transaction';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BankAccountService {
  
  private getBankAccountsUrl = `${environment.apiURL}/api/account/getBankAccounts`;
  private getTransactionsUrl = `${environment.apiURL}/getTransactions`;
  private setBankAccountsUrl = `${environment.apiURL}/api/account/createBankAccount`;
  private fundTransferUrl = `${environment.apiURL}/api/account/transferFunds`
  bankAccounts: BankAccount[] = [];
  currentBankAccounts: BankAccount = {
    id: 0,
    name: '',
    balance: 0,
    description: '',
    creationDate: '',
    accountTypeId: 0,
    user: null,
    transactionList: null
  };
  constructor(
    private myHttpClient: HttpClient,
    private cookieServ: CookieService,
    private router: Router
  ) {}

  /**
   * This method access the endpoint in the server and requests a
   * list of all bank accounts with the id of the current user.
   *
   * Note: this method needs to be altered with the JWT protocol.
   *
   * @returns BankAccount[] - an array of json objects of the BankAccount type.
   */
  getUserBankAccounts(): Observable<BankAccount[]> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: this.cookieServ.get('token'),
    });
    // this.bankAccounts = 
    return this.myHttpClient.get<BankAccount[]>(this.getBankAccountsUrl, {
      headers: httpHeaders,
    });
  }

  /**
   * This method access the endpoint in the server and sends a
   * bankAccount object so that it can be saved in the satabase.
   *
   * @param bankAccount - BankAccount object without all parameters of BankAccount.
   * @returns
   */
  setUserBankAccounts(bankAccount: object): Observable<BankAccount> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: this.cookieServ.get('token'),
    });

    return this.myHttpClient.post<BankAccount>(
      this.setBankAccountsUrl,
      JSON.stringify(bankAccount),
      { headers: httpHeaders }
    );
  }

  

  getTransactionArray(): Observable<Transaction[]>{
    let httpHeaders = new HttpHeaders({
      'Content-Type':'application/json',
      Accept: 'application/json',
      Authorization: this.cookieServ.get('token')
    });

    return this.myHttpClient.get<Transaction[]>(this.getTransactionsUrl+`/${this.currentBankAccounts.id}`, {
      headers: httpHeaders,
    });

  }

  /**
   * This method accesses the endpoint of the server to 
   * transfer funds between accounts
   * @params string,string,number
   */
   transferFundsOwned(fundTransfer:FundTransfer){
    let tranToAccountName: string = "";
    let tranFromAccountName: string = "";

    for(let item of this.bankAccounts){
      if(item.id == fundTransfer.transferToAccount){
        tranToAccountName = item.name;
      }
      if(item.id == fundTransfer.transferFromAccount){
        tranFromAccountName = item.name;
      }

    }

    let transactionFrom = {
      id: 0,
      amount: fundTransfer.transferAmount,
      description: 'Money transfer from '+tranFromAccountName+' to '+tranToAccountName,
      creationDate: 0,
      accountId: fundTransfer.transferFromAccount,
      txTypeId: 1
    }

    let transactionTo = {
      id: 0,
      amount: fundTransfer.transferAmount,
      description: 'Money transfer from '+tranFromAccountName+' to '+tranToAccountName,
      creationDate: 0,
      accountId: fundTransfer.transferToAccount,
      txTypeId: 2
    }
    let bool: boolean = false;
    this.sendTransactionData(transactionFrom).subscribe(
      (data)=>{
        console.log(data);
        this.sendTransactionData(transactionTo).subscribe(
          (data)=>{
            console.log(data);
            this.router.navigate(['/feed']);
          },
          (msg)=>{
            console.log("An issue occured:",msg);
            bool = true;
          }
        );
      }
    );
    return bool;

    
  }

  /**
   * Added headers to cope with CORS errors
   * @author Cameron, Amir, Chandra
   */
   sendTransactionData(newTransaction) {

    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": this.cookieServ.get("token")
    });
    let options = { headers: httpHeaders };

    return this.myHttpClient.post(`${environment.apiURL}/transaction`, newTransaction, options);

  }

  setBankAccounts(data: BankAccount[]) {
    this.bankAccounts = data;
  }

  getBankAccounts() {
    return this.bankAccounts;
  }

  setCurrentBankAccount(currentBankAccount: BankAccount) {
    this.currentBankAccounts = currentBankAccount;
  }

  getCurrentBankAccount() {
    return this.currentBankAccounts;
  }

}
