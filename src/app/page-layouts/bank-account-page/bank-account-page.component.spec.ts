import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountPageComponent } from './bank-account-page.component';

describe('BankAccountPageComponent', () => {
  let component: BankAccountPageComponent;
  let fixture: ComponentFixture<BankAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
