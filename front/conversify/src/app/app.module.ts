import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgArrayPipesModule } from 'ngx-pipes';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app-component/app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';

const environment = {
  production: false,
  url: 'http://localhost:5000'
};
const config: SocketIoConfig = { url: environment.url, options: {} };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgArrayPipesModule,
    HttpClientModule,
    SocketIoModule.forRoot(config) as ModuleWithProviders<{}>
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
