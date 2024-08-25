import { Component } from '@angular/core';
import {UserSettingsComponent} from "./user-settings/user-settings.component";
import {BlockchainSettingsComponent} from "./blockchain-settings/blockchain-settings.component";

@Component({
  selector: 'app-general-settings',
  standalone: true,
  imports: [
    UserSettingsComponent,
    BlockchainSettingsComponent
  ],
  templateUrl: './general-settings.component.html',
  styleUrl: './general-settings.component.scss'
})
export class GeneralSettingsComponent {

}
