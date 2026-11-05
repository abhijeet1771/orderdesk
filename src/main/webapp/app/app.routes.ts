import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard),
    title: 'Dashboard',
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.routes'),
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.routes'),
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.routes'),
  },
  { path: '**', redirectTo: '' },
];
