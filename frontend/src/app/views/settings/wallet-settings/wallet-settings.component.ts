import { Component, ViewChild,  } from '@angular/core';
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
  TableDirective,
} from "@coreui/angular";
import {NgTemplateOutlet} from "@angular/common";
import {WalletSettingsService} from "./wallet-settings.service";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { validateEthereumAddress, validateSolanaAddress } from './wallet.utils';
import { AppToastComponent } from 'src/app/shared/components/toast/toast.component';

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
    NgTemplateOutlet,
    ReactiveFormsModule,
    AppToastComponent
],
  templateUrl: './wallet-settings.component.html',
  styleUrl: './wallet-settings.component.scss'
})

export class WalletSettingsComponent {
  @ViewChild('toast') toast!: AppToastComponent;
  
  newWalletForm: FormGroup;

  constructor(private walletSettingsService: WalletSettingsService, private fb: FormBuilder) {
    this.walletSettingsService = new WalletSettingsService();
    this.newWalletForm = this.fb.group({
      description: 'My wallet',
      walletHash: '',
      chain: 'ETHER',
    });
  }
  
  async ngOnInit() {
    const response = await this.walletSettingsService.getWalletList();
    console.log(response);
    this.toast.toggleToast();
  }

  onSubmit(){
    try {
      const value = this.newWalletForm.value;
      console.log(value);
  
      if (!value.description || !value.walletHash || !value.chain) throw new Error('All fields are required');
      if (((value.chain === 'ETHER' || value.chain === 'BSC') && !validateEthereumAddress(value.walletHash) || (value.chain === 'SOL' && !validateSolanaAddress(value.walletHash)))) throw new Error('Invalid wallet address');
  
      this.walletSettingsService.insertWallet(value);
      window.location.reload();
    } catch (e) {
      console.log(e.message);
    }
  }

}
