import { Route } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';

export const routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then((m) => m.HomeComponent),
  },

  {
    path:'head',
    component: HeaderComponent
  }
];
