import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'sensor',
    loadComponent: () => import('./pages/sensor.component').then(m => m.SensorComponent)
  },
  {
    path: 'guide',
    loadComponent: () => import('./pages/guide.component').then(m => m.GuideComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about.component').then(m => m.AboutComponent)
  }
];