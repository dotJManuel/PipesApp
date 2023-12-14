import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Configuracion del local de la app
import localEsMX from '@angular/common/locales/es-MX';
import localJa from '@angular/common/locales/ja';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsMX);
registerLocaleData(localJa);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        SharedModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es-MX' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
