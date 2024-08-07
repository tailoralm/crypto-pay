import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective,
  FormControlDirective, FormDirective, FormLabelDirective
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-blockchain-settings',
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
    ReactiveFormsModule,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective
  ],
  templateUrl: './blockchain-settings.component.html',
  styleUrl: './blockchain-settings.component.scss'
})
export class BlockchainSettingsComponent {
  checkboxes: any = {
    useEtherscan: false,
    useSolscan: false,
    useBscscan: false
  };

  onChangeCheckbox(event: any) {
    this.checkboxes[event.target.id] = event.target.checked!;
  }
}
