import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccountBalanceComponent } from './manage-account-balance.component';

describe('ManageAccountBalanceComponent', () => {
  let component: ManageAccountBalanceComponent;
  let fixture: ComponentFixture<ManageAccountBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAccountBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAccountBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
