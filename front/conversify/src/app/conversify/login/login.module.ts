import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { MaterialModule } from './../../material.module';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    FormRegisterComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
})
export class LoginModule {}
