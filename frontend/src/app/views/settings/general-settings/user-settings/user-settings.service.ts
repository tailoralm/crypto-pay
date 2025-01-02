import { Injectable } from '@angular/core';
import {IUserSettingsForm} from "./user-settings.types";
import {BaseApiService} from "../../../../shared/services/base-api.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService extends BaseApiService {

  getFormData(): Promise<IUserSettingsForm> {
    return this.get(`settings/${this.userData.userId}`);
  }
  
  async saveData(values: IUserSettingsForm) {
    console.log(values);
    await this.put(`settings/${this.userData.userId}` , values);
    window.location.reload();
  }
}
