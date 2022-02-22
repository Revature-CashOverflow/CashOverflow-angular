import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMoneyOwnedComponent } from './transfer-money-owned.component';

describe('TransferMoneyOwnedComponent', () => {
  let component: TransferMoneyOwnedComponent;
  let fixture: ComponentFixture<TransferMoneyOwnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferMoneyOwnedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferMoneyOwnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
