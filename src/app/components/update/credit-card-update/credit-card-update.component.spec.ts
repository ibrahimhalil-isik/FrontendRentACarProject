import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardUpdateComponent } from './credit-card-update.component';

describe('CreditCardUpdateComponent', () => {
  let component: CreditCardUpdateComponent;
  let fixture: ComponentFixture<CreditCardUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
