import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountMoneyTransferComponent } from './bank-account-money-transfer.component';

describe('BankAccountMoneyTransferComponent', () => {
  let component: BankAccountMoneyTransferComponent;
  let fixture: ComponentFixture<BankAccountMoneyTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountMoneyTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountMoneyTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
