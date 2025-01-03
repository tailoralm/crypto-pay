import { Injectable } from '@angular/core';
import {IFormData} from "./new-payment-intention.types";
import {IWalletSettings} from "../../../shared/interfaces/wallet.interface";
import {BaseApiService} from "../../../shared/services/base-api.service";
import {ISelect} from "../../../shared/interfaces/form.interface";

@Injectable({
  providedIn: 'root'
})
export class NewPaymentIntentionService extends BaseApiService {

  async getFormData(): Promise<IFormData> {
    const wallets: IWalletSettings[] = await this.get(`wallet/list`);
    const blockchains: ISelect[] = [];
    for (const wallet of wallets) {
      if (!blockchains.some(blockchain => blockchain.value === wallet.chain)) {
        blockchains.push({label: wallet.chain, value: wallet.chain});
      }
    }
    return {
      blockchains,
      wallets
    };
  }

  createPaymentIntention(values: any) {
    return this.post('payment-intention', values);
  }
}
