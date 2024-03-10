import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import * as fr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { 

  constructor() {
    registerLocaleData(fr.default);
  }
}
