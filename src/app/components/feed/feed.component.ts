import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BankAccount } from '../../model/bank-account';
import { BankAccountService } from '../../service/bankAccount/bank-account.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  bankAccounts: BankAccount[] = [];

  cardBackG= ['l-bg-blue-dark','l-bg-cherry ','l-bg-orange-dark','l-bg-cyan'];
  constructor(private bankAccountService: BankAccountService, private router: Router) {
    
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
      console.log("This is what's in the feed BankAccountArray");
      console.log(this.bankAccounts);
      this.bankAccountService.setBankAccounts(data);
    });
  }

  transferingToBankAccountPage(currentBankAccount: BankAccount){
    this.bankAccountService.setCurrentBankAccount(currentBankAccount);
    this.router.navigate(['/bankAccount']);
  }
}
