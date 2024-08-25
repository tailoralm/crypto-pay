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
import * as MaskUtils from "../../../shared/utils/masks.utils";

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
