import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule) },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./features/register/register.module').then((m) => m.RegisterModule) },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
