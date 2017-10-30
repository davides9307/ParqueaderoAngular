import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routes';
import {VehiculosService} from './service/vehiculos.service';

import { AppComponent } from './app.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { SalidaComponent } from './salida/salida.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    ConsultaComponent,
    SalidaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
  VehiculosService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
