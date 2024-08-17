import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiService} from "../../../shared/services/base-api.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  login(values: any) {
    console.log(this.baseUrl);
    console.log(values);
  }
}
