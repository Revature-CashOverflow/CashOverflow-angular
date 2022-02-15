import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, ObservedValueOf } from 'rxjs';
import { IncomeExpenseService } from '../income-expense.service';

@Component({
  selector: 'app-income-expense',
  templateUrl: './income-expense.component.html',
  styleUrls: ['./income-expense.component.css']
})
export class IncomeExpenseComponent implements OnInit {

  transactionSuccess: number = 0;

  transactionForm = new FormGroup({
    type: new FormControl(''),
    amount: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl('')
  });

  constructor(
    private incomeExpenseServ: IncomeExpenseService
  ) { }

  ngOnInit(): void {
  }

  /**
   * @author Cameron, Amir, Chandra
   */
  transaction() {
    this.transactionSuccess = 0;
    document.getElementById("amount")?.classList.remove("is-invalid");

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
}
