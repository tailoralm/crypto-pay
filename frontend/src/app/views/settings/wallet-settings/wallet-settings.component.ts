import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective,
  TableColorDirective,
  TableDirective
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
    ReactiveFormsModule
  ],
  templateUrl: './wallet-settings.component.html',
  styleUrl: './wallet-settings.component.scss'
})
export class WalletSettingsComponent {

}
