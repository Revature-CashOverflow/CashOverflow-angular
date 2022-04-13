import { RequestsService } from './../../service/requests.service';
import { UserTransfer } from './../../model/user-transfer';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BankAccount } from 'src/app/model/bank-account';
import { BankAccountService } from 'src/app/service/bankAccount/bank-account.service';

@Component({
  selector: 'app-transfer-money-between-users',
  templateUrl: './transfer-money-between-users.component.html',
  styleUrls: ['./transfer-money-between-users.component.css']
})
export class TransferMoneyBetweenUsersComponent implements OnInit {
  bankAccounts: BankAccount[] = [];
  requests: UserTransfer[] = [];
  currentRequest: UserTransfer | undefined;
  currentBankAccount: BankAccount | undefined;
  showErrorMessage: boolean = false;

  requestForm = new FormGroup({
    sendOrReceive: new FormControl(''),
    user: new FormControl(''),
    transferAccount: new FormControl(''),
    transferAmount: new FormControl(),
  });

  transferForm = new FormGroup({
    sendOrReceive: new FormControl(''),
    user: new FormControl(''),
    transferAccount: new FormControl(''),
    transferAmount: new FormControl(),
  });

  constructor(
    private bankAccountService: BankAccountService,
    private router: Router,
    private toastr: ToastrService,
    private requestService: RequestsService
  ) {}

  onSubmit() {
    console.log(this.transferForm.value);
    this.bankAccountService
      .transferFundsBetweenUsers(this.transferForm.value)
      .subscribe(
        (resp) => {
          this.success();
          this.router.navigate(['/feed']);
        },
        (msg) => {
          this.error();
          this.showErrorMessage = true;
        }
      );
  }

  userSubmit() {
    console.log(this.transferForm.value);
    this.bankAccountService
      .transferFundsBetweenUsers(this.transferForm.value)
      .subscribe(
        (resp) => {
          this.success();
          this.router.navigate(['/feed']);
        },
        (msg) => {
          this.error();
          this.showErrorMessage = true;
        }
      );
  }

  ngOnInit(): void {
    this.bankAccounts = this.bankAccountService.getBankAccounts();
    this.populateRequestArray();
  }

  populateRequestArray() {
    this.requestService.getUserTransfer().subscribe((data) => {
      this.requests = data;
    });
  }

  success(): void {
    this.toastr.success('Transfer Success', `Please verify your accounts have updated.`)
  }

  error(): void {
    this.toastr.error('Transfer Error', 'Something went wrong with the transfer, please try again.')
  }
}
