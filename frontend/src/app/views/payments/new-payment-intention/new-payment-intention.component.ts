import {Component, OnInit, ViewChild} from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective,
} from "@coreui/angular";
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import * as MaskUtils from "../../../shared/utils/masks.utils";
import {NewPaymentIntentionService} from "./new-payment-intention.service";
import {ISelect} from "../../../shared/interfaces/form.interface";
import {IWalletSettings} from "../../../shared/interfaces/wallet.interface";
import {NgForOf} from "@angular/common";
import {AppToastComponent} from "../../../shared/components/toast/toast.component";

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
    FormSelectDirective,
    ReactiveFormsModule,
    AppToastComponent,
    NgForOf,
  ],
  templateUrl: './new-payment-intention.component.html',
  styleUrl: './new-payment-intention.component.scss'
})
export class NewPaymentIntentionComponent implements OnInit {
  @ViewChild('toast') toast!: AppToastComponent;
  paymentForm: FormGroup;
  blockchainsList: ISelect[] = [];
  walletsList: IWalletSettings[] = [];
  filteredWallets: IWalletSettings[] = [];

  constructor(private newPaymentIntentionService: NewPaymentIntentionService, private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      description: '',
      blockchain: '',
      wallet: '',
      value: '',
    });
  }

  ngOnInit() {
    this.newPaymentIntentionService.getFormData().then(data => {
      this.blockchainsList = data.blockchains;
      this.walletsList = data.wallets;
      this.paymentForm.get('blockchain').setValue(this.blockchainsList[0].value);
      this.filterWallets();
    });
  }

  filterWallets() {
    this.filteredWallets = this.walletsList.filter(wallet => wallet.chain === this.paymentForm.get('blockchain').value);
    this.paymentForm.get('wallet').setValue(this.filteredWallets[0].id);
  }

  validateValue() {
    this.paymentForm.get('value').setValue(MaskUtils.stringToCurrency(this.paymentForm.get('value').value.toString()));
  }

  async onSubmit(){
    try {
      const value = this.paymentForm.value;
      if (!value.description || !value.wallet || !value.blockchain || !value.value) throw new Error('All fields are required');

      await this.newPaymentIntentionService.createPaymentIntention(value);
      window.location.reload();
    } catch (e) {
      this.toast.error(e.message);
    }
  }
}
