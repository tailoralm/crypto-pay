import { Injectable } from '@angular/core';
import { BaseApiService } from 'src/app/shared/services/base-api.service';
import {IWalletSettings} from "../../../shared/interfaces/wallet.interface";


@Injectable({
  providedIn: 'root'
})
export class WalletSettingsService extends BaseApiService {

  getWalletList(): Promise<IWalletSettings[]> {
    return this.get(`wallet/list`);
  }

  insertWallet(value: IWalletSettings) {
    return this.post(`wallet` , value);
  }
}
