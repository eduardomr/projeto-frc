import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./conversify/landing/landing.module').then(
        (m) => m.LandingModule
      ),
  },
  {
    path: 'access',
    loadChildren: () =>
      import('./conversify/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./errors/errors.module').then((m) => m.ErrorsModule),
  },
  {
    path: 'text', // Definição do novo path '/text'
    redirectTo: 'home/text', // Redirecionamento para 'home/text' dentro do módulo LandingModule
    pathMatch: 'full',
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
