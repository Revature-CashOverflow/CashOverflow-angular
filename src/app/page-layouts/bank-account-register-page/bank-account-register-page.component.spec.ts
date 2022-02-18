import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountRegisterPageComponent } from './bank-account-register-page.component';

describe('BankAccountRegisterPageComponent', () => {
  let component: BankAccountRegisterPageComponent;
  let fixture: ComponentFixture<BankAccountRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountRegisterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
