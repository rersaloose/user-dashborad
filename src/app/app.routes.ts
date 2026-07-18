import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./features/user-directory/user-directory.routes').then(m => m.USER_DIRECTORY_ROUTES)
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];