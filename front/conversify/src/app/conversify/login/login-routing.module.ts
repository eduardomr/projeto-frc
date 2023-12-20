import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtAuthGuard } from 'src/app/shared/guards/jwt.auth.guard';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [JwtAuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
