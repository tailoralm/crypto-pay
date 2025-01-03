 import {Component, OnInit, ViewChild,} from '@angular/core';
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
import { NgTemplateOutlet, CommonModule } from "@angular/common";
import { WalletSettingsService } from "./wallet-settings.service";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { validateEthereumAddress, validateSolanaAddress } from './wallet.utils';
import { AppToastComponent } from 'src/app/shared/components/toast/toast.component';
 import {IWalletSettings} from "../../../shared/interfaces/wallet.interface";

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
    AppToastComponent,
    CommonModule
],
  templateUrl: './wallet-settings.component.html',
  styleUrl: './wallet-settings.component.scss'
})

export class WalletSettingsComponent implements OnInit {
  @ViewChild('toast') toast!: AppToastComponent;
  newWalletForm: FormGroup;
  walletList: IWalletSettings[] = [];

  constructor(private walletSettingsService: WalletSettingsService, private fb: FormBuilder) {
    this.walletSettingsService = new WalletSettingsService();
    this.newWalletForm = this.fb.group({
      description: 'My wallet',
      walletHash: '',
      chain: 'ETHER',
    });
  }

  async ngOnInit() {
    this.walletList = await this.walletSettingsService.getWalletList();
  }

  async onSubmit(){
    try {
      const value = this.newWalletForm.value;

      if (!value.description || !value.walletHash || !value.chain) throw new Error('All fields are required');
      if (((value.chain === 'ETHER' || value.chain === 'BSC') && !validateEthereumAddress(value.walletHash) || (value.chain === 'SOL' && !validateSolanaAddress(value.walletHash)))) throw new Error('Invalid wallet address');

      await this.walletSettingsService.insertWallet(value);
      window.location.reload();
    } catch (e) {
      this.toast.error(e.message);
    }
  }

}
