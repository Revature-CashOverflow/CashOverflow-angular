import { Component, OnInit } from '@angular/core';
import { BankAccountService } from 'src/app/service/bankAccount/bank-account.service';
import { Transaction } from '../../model/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactionArray: Transaction[] = [];

  constructor(private bankAccountService: BankAccountService) { }

  ngOnInit(): void {
    this.populateTransactionArray();

  }

  populateTransactionArray(){
    this.bankAccountService.getTransactionArray().subscribe(
      (data) =>{
        this.transactionArray = data;
      }
    );
  }

}
