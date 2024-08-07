import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPaymentIntentionComponent } from './new-payment-intention.component';

describe('NewPaymentIntentionComponent', () => {
  let component: NewPaymentIntentionComponent;
  let fixture: ComponentFixture<NewPaymentIntentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPaymentIntentionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPaymentIntentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
