import { Component, Input, OnInit } from '@angular/core';
import { UserAccount } from '../../model/user-account';
import { BankAccount } from '../../model/bank-account';
import { BankAccountService } from 'src/app/service/bankAccount/bank-account.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bank-account-form',
  templateUrl: './create-bank-account-form.component.html',
  styleUrls: ['./create-bank-account-form.component.css']
})
export class CreateBankAccountFormComponent implements OnInit {

  @Input() formName: string = "default";
  @Input() formDescription: string = "default";
  @Input() formAccountType: number = 0;
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
}
  





  constructor(private bankAccountService: BankAccountService,private cookieServ: CookieService, private router: Router) { }

  ngOnInit(): void {
    if(!this.cookieServ.get("Authorization")) this.router.navigate(['/login']);
  }

  /**
   * This method populate our bankAccount object to be sent
   * to the server in order to created in the database
   */
  createBankAccount() {
    this.bankAccount.name = this.formName;
    this.bankAccount.description = this.formDescription;
    this.bankAccount.accountTypeId = this.formAccountType;
    // this.bankAccountService.setUserBankAccounts(this.bankAccount);
    this.bankAccountService.setUserBankAccounts(this.bankAccount).subscribe();
    
  }

}
