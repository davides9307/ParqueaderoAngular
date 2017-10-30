import { RouterModule, Routes } from '@angular/router';
import {IngresoComponent} from  './ingreso/ingreso.component';
import {ConsultaComponent} from  './consulta/consulta.component';

const APP_ROUTES: Routes = [
  { path: 'ingreso', component: IngresoComponent },
    { path: 'consulta', component: ConsultaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'ingreso' }
];

export const APP_ROUTING  = RouterModule.forRoot(APP_ROUTES);
