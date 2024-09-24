import { Component } from '@angular/core';
import {
  ButtonCloseDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective, FormSelectDirective,
  ModalBodyComponent,
  ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective,
  TableColorDirective,
  TableDirective
} from "@coreui/angular";
import {NgTemplateOutlet} from "@angular/common";
import {WalletSettingsService} from "./wallet-settings.service";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wallet-settings',
  standalone: true,
  imports: [
    CardHeaderComponent,
    CardBodyComponent,
    TableDirective,
    TableColorDirective,
    ModalToggleDirective,
    ButtonDirective,
    ModalComponent,
    ModalBodyComponent,
    ColComponent,
    FormSelectDirective,
    FormLabelDirective,
    FormControlDirective,
    ModalFooterComponent,
    ModalHeaderComponent,
    CardComponent,
    ButtonCloseDirective,
    ModalTitleDirective,
    FormDirective,
    NgTemplateOutlet
  ],
  templateUrl: './wallet-settings.component.html',
  styleUrl: './wallet-settings.component.scss'
})

export class WalletSettingsComponent {
  newWalletForm: FormGroup;

  constructor(private walletSettingsService: WalletSettingsService, private fb: FormBuilder) {
    this.walletSettingsService = new WalletSettingsService();
    this.newWalletForm = this.fb.group({
      description: '',
      walletHash: '',
      chain: '',
    });
  }
  
  async ngOnInit() {
    const response = await this.walletSettingsService.getFormData();
    console.log(response);
  }


  onSubmit(){
    console.log(this.newWalletForm.value);
    this.walletSettingsService.insertWallet(this.newWalletForm.value);
  }
}
