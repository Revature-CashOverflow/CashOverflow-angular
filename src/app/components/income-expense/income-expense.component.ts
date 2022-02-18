import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { BankAccount } from 'src/app/model/bank-account';
import { BankAccountService } from 'src/app/service/bankAccount/bank-account.service';
import { IncomeExpenseService } from '../../service/income-expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-expense',
  templateUrl: './income-expense.component.html',
  styleUrls: ['./income-expense.component.css'],
})
export class IncomeExpenseComponent implements OnInit {
  accounts: BankAccount[] = [];
  currentBalance: number = 0;


  @Input() formAccountId: number = 0;
  @Input() formTransactionType: number = 0;
  @Input() formAmount: number = 0;
  @Input() formName: string = '';
  @Input() formDescription: string = '';

  newTransaction = {
    id: 0,
    amount: 0,
    description: '',
    creationDate: 0,
    accountId: 0,
    txType: 0
    // transactionType: {
    //   id: 0,
    //   type: ''
    // }
  }

  transactionSuccess: number = 0;

  getCookie(key: string, value: string) {
    this.cookieServ.set(key, value);
  }

  constructor(
    private incomeExpenseServ: IncomeExpenseService,
    private cookieServ: CookieService,
    private bankServ: BankAccountService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.grabAccounts();
  }

  /**
   * @author Cameron, Amir, Chandra
   */
  transaction() {    
    
    this.newTransaction.accountId = this.formAccountId;
    this.newTransaction.txType = this.formTransactionType;
    this.newTransaction.amount = this.formAmount;
    this.newTransaction.description = this.formDescription;
    console.log(this.newTransaction);
    
    
    this.incomeExpenseServ.sendTransactionData(this.newTransaction).subscribe(
      (data) => {
        document.getElementById('amount')?.classList.remove('is-invalid');
        this.transactionSuccess == 1;
        this.router.navigate(['/feed']);
      },
      (error: HttpErrorResponse) => {
        document.getElementById('amount')?.classList.add('is-invalid');
        console.log("Sending transaction failed");
      }
    )
  }


  grabAccounts() {
    this.bankServ.getUserBankAccounts().subscribe(
      (data: BankAccount[]) => {
        this.accounts = data;
        console.log("Successfully retrieved BankAccounts");

      },
      (error: HttpErrorResponse) => {
        console.log("Failed to retrieve BankAccounts")
      }
    )
  }
}
