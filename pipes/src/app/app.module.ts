import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VueltaPipe } from './pipes/vuelta.pipe';
import { RecortarTextosPipe } from './pipes/recortar-textos.pipe';
import { FormateadorPipe } from './pipes/formateador.pipe';

registerLocaleData( localeEs )

@NgModule({
  declarations: [
    AppComponent,
    VueltaPipe,
    RecortarTextosPipe,
    FormateadorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
