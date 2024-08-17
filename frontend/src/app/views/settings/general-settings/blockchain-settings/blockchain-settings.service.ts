import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlockchainSettingsService {

  constructor() {
  }

  getFormData() {
    return {
      useEtherscan: true,
      useSolscan: false,
      useBscscan: false,
      etherscanToken: 'Walet hash here',
      solscanToken: '',
      bscscanToken: '',
    }
  }

  saveData(values: any) {
    console.log(values);
  }
}
