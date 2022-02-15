import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BankAccount } from '../model/bank-account';
import { BankAccountService } from '../service/bankAccount/bank-account.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  bankAccounts: BankAccount[] = [
    {
      id: 3,
      name: 'first account',
      balance: 0.0,
      description: 'zxcv',
      creationDate: '2022-02-09T21:34:37.626999355Z',
      accountTypeId: 2,
      user: null,
      transactionList: null,
    },
    {
      id: 4,
      name: 'another account',
      balance: 2.0,
      description: "I'm rich",
      creationDate: '2022-05-09T21:34:37.626999355Z',
      accountTypeId: 1,
      user: null,
      transactionList: null,
    },
  ];

  constructor(
    private bankAccountService: BankAccountService,
    private cookieServ: CookieService,
    private router: Router
  ) {
    console.log('here in constructor for componnet feed');
  }

  /**
   * This method executes populateBackAccountsArray when this component is loaded
   */
  ngOnInit(): void {
    if (!this.cookieServ.get('Authorization')) this.router.navigate(['/login']);
    console.log('Inside ngOnInit()');
    this.populateBackAccountsArray();
    console.log('Inside ngOnInit(), showing bankAccount: ' + this.bankAccounts);
    console.log('inside cookie serv===>', this.cookieServ.get('Authorization'));
  }

  /**
   * This method updates the bankAccount array with the response from the endpoint
   * getBankAccounts in the server.
   */
  populateBackAccountsArray() {
    this.bankAccountService.getUserBankAccounts().subscribe((data) => {
      this.bankAccounts = data;
      console.log(this.bankAccounts);
    });
  }

  // async populateBackAccountsArray() {
  //   console.log("Inside populateBankAccountsArray()");
  //   this.bankAccounts = await this.bankAccountService.getUserBankAccounts();
  //   console.log(this.bankAccounts);
  // }
}
