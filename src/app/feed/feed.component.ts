import { Component, OnInit, OnChanges } from '@angular/core';
import { BankAccount } from '../model/bank-account';
import { BankAccountService } from '../service/bankAccount/bank-account.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  bankAccounts: BankAccount[] = [];

  constructor(private bankAccountService: BankAccountService) {
    console.log('here in constructor for componnet feed');
  }

  /**
   * This method executes populateBackAccountsArray when this component is loaded
   */
  ngOnInit(): void {
    this.populateBackAccountsArray();
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
}
