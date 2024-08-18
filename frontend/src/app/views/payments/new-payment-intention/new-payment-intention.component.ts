import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as MaskUtils from "../../../shared/utils/masks.utils";

@Component({
  selector: 'app-new-payment-intention',
  templateUrl: './new-payment-intention.component.html',
  styleUrl: './new-payment-intention.component.scss'
})
export class NewPaymentIntentionComponent {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      description: '',
      blockchain: '',
      wallet: '',
      value: '',
    });
  }

  validateValue() {
    this.paymentForm.get('value').setValue(MaskUtils.stringToCurrency(this.paymentForm.get('value').value.toString()));
  }
}
