import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {
  ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent,
  ColComponent,
 FormControlDirective, FormDirective, FormLabelDirective
} from "@coreui/angular";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {UserSettingsService} from "./user-settings.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ColComponent,
    FormDirective,
    ReactiveFormsModule,
    FormLabelDirective,
    FormControlDirective,
    ButtonDirective,
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

  async ngOnInit() {
    const response = await this.userSettingsService.getFormData();
    this.userSettingsForm.setValue({
      fullName: response.fullName,
      email: response.email,
      phone: response.phone
    });
  }

  onSubmit() {
    this.userSettingsService.saveData(this.userSettingsForm.value);
  }

}
