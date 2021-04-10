import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardDeleteComponent } from './credit-card-delete.component';

describe('CreditCardDeleteComponent', () => {
  let component: CreditCardDeleteComponent;
  let fixture: ComponentFixture<CreditCardDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
