import { Component, OnInit } from '@angular/core';
import { BankAccount } from '../model/bank-account';
import { FundTransfer } from '../model/fund-transfer';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { BankAccountService } from '../service/bankAccount/bank-account.service';

@Component({
  selector: 'app-transfer-money-owned',
  templateUrl: './transfer-money-owned.component.html',
  styleUrls: ['./transfer-money-owned.component.css']
})
export class TransferMoneyOwnedComponent implements OnInit {
  bankAccounts: BankAccount[] = [];

  transferForm = new FormGroup({
    transferFromAccount:new FormControl(''),
	  transferToAccount:new FormControl(''),
	  transferAmount:new FormControl()
  });

  constructor(
    private bankAccountService: BankAccountService
  ) { }
  
  onSubmit(){
    console.log(this.transferForm.value);
    this.bankAccountService.transferFundsOwned(this.transferForm.value)
      .subscribe(resp =>{console.log(resp.toString)})
  }

  ngOnInit(): void {
    this.populateBackAccountsArray();
  }

  populateBackAccountsArray() {
    this.bankAccountService.getUserBankAccounts().subscribe((data) => {
      this.bankAccounts = data;
      console.log(this.bankAccounts);
    });
  }

}
