import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletSettingsService {
  constructor() { }

  // Métodos do serviço
  minhaFuncao() {
    console.log('Esta é uma função do meu serviço');
  }
}
