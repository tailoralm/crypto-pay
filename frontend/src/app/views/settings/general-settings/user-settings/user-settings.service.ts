import { Injectable } from '@angular/core';
import {IUserSettingsForm} from "./user-settings.types";
import {BaseApiService} from "../../../../shared/services/base-api.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService extends BaseApiService {

  getFormData(): IUserSettingsForm {
    return {
      fullName: 'Mocked name',
      email: 'email',
      phone: '999 999 999'
    }
  }

  saveData(values: IUserSettingsForm) {
    console.log(this.baseUrl);
    console.log(values);
  }
}
