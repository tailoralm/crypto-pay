import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Settings'
    },
    children: [
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
      },
      {
        path: 'general',
        loadComponent: () => import('./general-settings/general-settings.component').then(m => m.GeneralSettingsComponent),
        data: {
          title: 'General'
        }
      },
      {
        path: 'wallets',
        loadComponent: () => import('./wallet-settings/wallet-settings.component').then(m => m.WalletSettingsComponent),
        data: {
          title: 'Wallets'
        }
      },
    ]
  }
];


