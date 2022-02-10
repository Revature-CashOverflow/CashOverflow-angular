import { Component, Input, OnInit } from '@angular/core';
import { UserAccount } from '../../model/user-account';
import { BankAccount } from '../../model/bank-account';
import { BankAccountService } from 'src/app/service/bank-account.service';

@Component({
  selector: 'app-create-bank-account-form',
  templateUrl: './create-bank-account-form.component.html',
  styleUrls: ['./create-bank-account-form.component.css']
})
export class CreateBankAccountFormComponent implements OnInit {

  @Input() name: string = "default";
  @Input() description: string = "default";
  @Input() accountType: number = 0;
  userAccount: UserAccount = {
    "id": 1,
    "email": "a@woo.com",
    "username": "dummy",
    "firstName": "dum",
    "lastName": "dummy",
    "password": "password",
    "creationDate": "2022-02-09T21:32:03.255801Z"
  }
  bankAccount = {
    "name": "asdff",
    "description": "zxcfv",
    "accountTypeId": 2,
    "user": {
        "id": 1,
        "email": "a@woo.com",
        "username": "dummy",
        "firstName": "dum",
        "lastName": "dummy",
        "password": "password",
        "creationDate": "2022-02-09T21:32:03.255801Z"
    }
}
  





  constructor(private bankAccountService: BankAccountService) { }

  ngOnInit(): void {
  }

  createBankAccount() {
    console.log(
      "Acount name:", this.name,
      "\nAcount description:", this.description,
      "\nAcount account type:", this.accountType,
      this.userAccount
    );
    this.bankAccount.name = this.name;
    this.bankAccount.description = this.description;
    this.bankAccount.accountTypeId = this.accountType;
    console.log("This is the result:",this.bankAccountService.setUserBankAccounts(this.bankAccount));
    
  }

}
