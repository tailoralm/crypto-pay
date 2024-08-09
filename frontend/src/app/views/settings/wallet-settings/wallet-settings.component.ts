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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgTemplateOutlet} from "@angular/common";
import {WalletSettingsService} from "./wallet-settings.service";

@Component({
  selector: 'app-wallet-settings',
  standalone: true,
  imports: [
    TableColorDirective,
    TableDirective,
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ButtonDirective,
    ColComponent,
    FormControlDirective,
    FormDirective,
    FormLabelDirective,
    FormsModule,
    ReactiveFormsModule,
    NgTemplateOutlet,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalToggleDirective,
    FormSelectDirective
  ],
  templateUrl: './wallet-settings.component.html',
  styleUrl: './wallet-settings.component.scss'
})

export class WalletSettingsComponent {
  walletSettingsService: WalletSettingsService;

  constructor() {
    this.walletSettingsService = new WalletSettingsService();
  }
  onSubmit(){
    this.walletSettingsService.minhaFuncao();
  }
}
