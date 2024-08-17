import { Injectable } from '@angular/core';
import {IFormData} from "./new-payment-intention.types";

@Injectable({
  providedIn: 'root'
})
export class NewPaymentIntentionService {

  constructor() { }

  getFormData(): IFormData {
    return {
      blochckains: [{name: 'Ethereum', value: 'ETH'}, {name: 'Solana', value: 'SOL'}, {name: 'BinanceSC', value: 'BSC'}],
      wallets: [{name: 'Wallet ETH', value: 'ETH', blockchain: 'ETH'}, {name: 'Wallet ETH2', value: 'ETH2', blockchain: 'ETH'}, {name: 'Wallet SOL', value: 'SOL', blockchain: 'SOL'}],
    }
  }

  createPaymentIntention(values: any) {
    console.log(values);
  }
}
