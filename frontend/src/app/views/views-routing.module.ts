import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Payments'
    },
    children: [
      {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full'
      },
      {
        path: 'new',
        loadComponent: () => import('./payments/new-payment-intention/new-payment-intention.component').then(m => m.NewPaymentIntentionComponent),
        data: {
          title: 'New'
        }
      },
      {
        path: 'history',
        loadComponent: () => import('./payments/new-payment-intention/new-payment-intention.component').then(m => m.NewPaymentIntentionComponent),
        data: {
          title: 'History'
        }
      },
    ]
  },
  {
    path: 'settings',
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
        loadComponent: () => import('./settings/general-settings/general-settings.component').then(m => m.GeneralSettingsComponent),
        data: {
          title: 'General'
        }
      },
      {
        path: 'wallets',
        loadComponent: () => import('./settings/wallet-settings/wallet-settings.component').then(m => m.WalletSettingsComponent),
        data: {
          title: 'Wallets'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
