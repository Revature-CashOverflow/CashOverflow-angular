import { Component, Input, OnInit } from '@angular/core';
import { BankAccountService } from 'src/app/service/bankAccount/bank-account.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bank-account-form',
  templateUrl: './create-bank-account-form.component.html',
  styleUrls: ['./create-bank-account-form.component.css'],
})
export class CreateBankAccountFormComponent implements OnInit {
  @Input() formName: string = 'default';
  @Input() formDescription: string = 'default';
  @Input() formAccountType: number = 0;
  bankAccount = {
    name: 'asdff',
    description: 'zxcfv',
    accountTypeId: 2,
  };

  constructor(
    private bankAccountService: BankAccountService,
    private cookieServ: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * This method populate our bankAccount object to be sent
   * to the server in order to created in the database
   */
  createBankAccount() {
    this.bankAccount.name = this.formName;
    this.bankAccount.description = this.formDescription;
    this.bankAccount.accountTypeId = this.formAccountType;
    this.bankAccountService.setUserBankAccounts(this.bankAccount).subscribe((data) => {
      this.router.navigate(['/feed'])
    });
  }
}
