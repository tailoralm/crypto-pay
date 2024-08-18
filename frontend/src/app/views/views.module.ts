import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import {
  BlockchainSettingsComponent
} from "./settings/general-settings/blockchain-settings/blockchain-settings.component";
import {UserSettingsComponent} from "./settings/general-settings/user-settings/user-settings.component";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckComponent,
  TableDirective
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GeneralSettingsComponent} from "./settings/general-settings/general-settings.component";
import {NewPaymentIntentionComponent} from "./payments/new-payment-intention/new-payment-intention.component";
import {WidgetsDropdownComponent} from "./widgets/widgets-dropdown/widgets-dropdown.component";


@NgModule({
  declarations: [
    BlockchainSettingsComponent,
    UserSettingsComponent,
    GeneralSettingsComponent,
    NewPaymentIntentionComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    FormCheckComponent,
    ReactiveFormsModule,
    ColComponent,
    WidgetsDropdownComponent,
    TableDirective,
  ]
})
export class ViewsModule { }
