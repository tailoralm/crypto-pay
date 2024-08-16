import { Routes } from '@angular/router';

export const routes: Routes = [
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
        loadComponent: () => import('./new-payment-intention/new-payment-intention.component').then(m => m.NewPaymentIntentionComponent),
        data: {
          title: 'New'
        }
      },
      {
        path: 'history',
        loadComponent: () => import('./new-payment-intention/new-payment-intention.component').then(m => m.NewPaymentIntentionComponent),
        data: {
          title: 'History'
        }
      },
    ]
  }
];


