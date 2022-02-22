import { Component, OnInit } from '@angular/core';
import { BankAccount } from '../../model/bank-account';
import { FundTransfer } from '../../model/fund-transfer';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { BankAccountService } from '../../service/bankAccount/bank-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-money-owned',
  templateUrl: './transfer-money-owned.component.html',
  styleUrls: ['./transfer-money-owned.component.css']
})
export class TransferMoneyOwnedComponent implements OnInit {
  bankAccounts: BankAccount[] = [];
  currentBankAccount: BankAccount | undefined;
  showErrorMessage: boolean = false;

  transferForm = new FormGroup({
    transferFromAccount:new FormControl(''),
	  transferToAccount:new FormControl(''),
	  transferAmount:new FormControl()
  });

  constructor(
    private bankAccountService: BankAccountService,
    private router: Router
  ) { }
  
  onSubmit(){
    console.log(this.transferForm.value);
    this.showErrorMessage = this.bankAccountService.transferFundsOwned(this.transferForm.value);
    console.log("This is the result of everything we've done so far:",this.showErrorMessage);
    
  }

  ngOnInit(): void {
    this.bankAccounts = this.bankAccountService.getBankAccounts();
    console.log("This is the bankAccount array inside of transfermoneybetweenaccountsForm");
    console.log(this.bankAccounts);
    
  }

}
