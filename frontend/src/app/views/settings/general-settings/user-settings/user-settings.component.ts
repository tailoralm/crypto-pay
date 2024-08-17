import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {
  ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent,
  ColComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective
} from "@coreui/angular";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserSettingsService} from "./user-settings.service";

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
export class UserSettingsComponent implements OnInit {
  userSettingsForm: FormGroup;

  constructor(private userSettingsService: UserSettingsService, private fb: FormBuilder) {
    this.userSettingsForm = this.fb.group({
      fullName: '',
      email: '',
      phone: '',
    });
  }

  ngOnInit(): void {
    const response = this.userSettingsService.getFormData();
    this.userSettingsForm.setValue(response);
  }

  onSubmit() {
    this.userSettingsService.saveData(this.userSettingsForm.value);
  }

}
