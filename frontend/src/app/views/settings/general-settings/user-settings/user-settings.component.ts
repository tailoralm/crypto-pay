import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent,
  ColComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [
    ButtonDirective,
    ColComponent,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    FormControlDirective,
    FormDirective,
    FormLabelDirective,
    FormSelectDirective,
    FormsModule,
    ReactiveFormsModule,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent
  ],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss'
})
export class UserSettingsComponent {

}
