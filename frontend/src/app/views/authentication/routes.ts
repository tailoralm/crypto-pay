import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('../authentication/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('../authentication/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register'
    }
  }
];
