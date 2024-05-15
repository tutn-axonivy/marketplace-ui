import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadChildren: () => import('./core/pages/home/home.routes').then(m => m.routes)
}];
