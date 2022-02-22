import { Component, OnInit } from '@angular/core';
import { BankAccount } from 'src/app/model/bank-account';
import { BankAccountService } from 'src/app/service/bankAccount/bank-account.service';

@Component({
  selector: 'app-bank-account-info',
  templateUrl: './bank-account-info.component.html',
  styleUrls: ['./bank-account-info.component.css']
})
export class BankAccountInfoComponent implements OnInit {

  currentBankAccount: BankAccount = {
    id: 0,
    name: 'Test Bank Account name',
    balance: 9000.00,
    description: 'Test Bank Account description',
    creationDate: '',
    accountTypeId: 0,
    user: null,
    transactionList: null
  }

  constructor(private bankAccountService: BankAccountService) { }

  ngOnInit(): void {
    this.currentBankAccount = this.bankAccountService.getCurrentBankAccount();
  }
}
