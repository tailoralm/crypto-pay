import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,
  FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, InputGroupTextDirective
} from "@coreui/angular";
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-payment-intention',
  standalone: true,
  imports: [
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ColComponent,
    FormControlDirective,
    FormDirective,
    FormLabelDirective,
    FormsModule,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    ReactiveFormsModule,
    FormSelectDirective,
    InputGroupTextDirective,
    ReactiveFormsModule
  ],
  templateUrl: './new-payment-intention.component.html',
  styleUrl: './new-payment-intention.component.scss'
})
export class NewPaymentIntentionComponent {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      value: ['']  // Initialize form control
    });
  }

  validateValue() {
    let value = this.paymentForm.get('value').value.replace(/[^0-9.]/g, '');

    if (value === '') {
      this.paymentForm.get('value').setValue('');
      return;
    }

    const dotCount = value.split('.').length - 1;
    if (dotCount > 0) {
      const parts = value.split('.');
      if (parts[0] === '') parts[0] = '0';
      if (parts[1].length > 2) {
        value = `${parts[0]}.${parts[1].substring(0, 2)}`;
      } else {
        value = `${parts[0]}.${parts[1]}`;
      }
    }

    if (parseFloat(value) > 99999) value = '99999.99';

    // Update the FormControl value
    this.paymentForm.get('value').setValue(value);
  }
}
