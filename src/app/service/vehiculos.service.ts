import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VehiculosService {
  constructor(private http:Http) {

   console.log("hola");
    }

    ObtenerVehiculos(){
      return this.http.get('http://localhost:8085/vehiculo').map((res:Response)=>res.json());
    }
  }
