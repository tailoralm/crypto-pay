import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {BaseApiService} from "../../../shared/services/base-api.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseApiService {

  constructor(private router: Router) {
    super();
  }

  async login(values: any) {
    try {
      console.log(values);
      const response = await this.axios.get(`${this.baseUrl}/login`, this.getHeaders());
      console.log(response);
      if (response.data.token) {
        localStorage.setItem(this.userDataVar, JSON.stringify(response.data));
        this.router.navigate(['/dashboard']);
      }
    } catch (e) {
      console.log(e);
      window.location.reload();
    }
  }

  verifyToken(isLoginPage = false) {
    // TODO: verify token with server
    const userData = this.getUserData();
    if (!userData.token) {
      this.router.navigate(['/login']);
    }
    console.log(userData);
    if (isLoginPage && userData.token) {
      this.router.navigate(['/dashboard']);
    }
  }

  logout() {
    localStorage.removeItem(this.userDataVar);
    this.router.navigate(['/login']);
  }
}
