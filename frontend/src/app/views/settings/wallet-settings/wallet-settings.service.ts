import { Injectable } from '@angular/core';
import { BaseApiService } from 'src/app/shared/services/base-api.service';
import { IWalletSettingsForm } from './wallet-settings.types';

@Injectable({
  providedIn: 'root'
})
export class WalletSettingsService extends BaseApiService {

  getWalletList(): Promise<IWalletSettingsForm> {
    return this.get(`wallet/list`);
  }
  
  async insertWallet(value: IWalletSettingsForm) {
    console.log(value);
    await this.post(`wallet` , value);
    // window.location.reload();
  }
}
