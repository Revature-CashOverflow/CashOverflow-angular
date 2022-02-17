import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { observable, Observable, ObservedValueOf } from 'rxjs';
import { IncomeExpenseService } from '../../service/income-expense.service';
import { BankAccount } from 'src/app/model/bank-account';
import { BankAccountService } from 'src/app/service/bankAccount/bank-account.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-income-expense',
  templateUrl: './income-expense.component.html',
  styleUrls: ['./income-expense.component.css'],
})
export class IncomeExpenseComponent implements OnInit {

  accounts?: BankAccount[]

  transactionSuccess: number = 0;

  getCookie(key: string, value: string) {
    this.cookieServ.set(key, value);
  }

  transactionForm = new FormGroup({
    accountId: new FormControl(' '),
    type: new FormControl(''),
    amount: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private incomeExpenseServ: IncomeExpenseService,
    private cookieServ: CookieService,
    private bankServ: BankAccountService
  ) { }



  ngOnInit(): void {
    this.grabAccounts();
  }

  /**
   * @author Cameron, Amir, Chandra
   */
  transaction() {
    this.transactionSuccess = 0;
    document.getElementById('amount')?.classList.remove('is-invalid');

    this.incomeExpenseServ.sendTransactionData(this.transactionForm.value).subscribe(
      (data) => {
        console.log('Form submitted successfully');
        this.transactionSuccess = 1;
      },
      (error: HttpErrorResponse) => {
        document.getElementById("amount")?.classList.add("is-invalid");
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
