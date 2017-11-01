import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class VehiculosService {









  constructor(private http:Http) {


    }

    ObtenerVehiculos(){
      return this.http.get('http://localhost:8085/vehiculo').map((res:Response)=>res.json());

    }

   GuardarVehiculos(vehiculo:any):Observable<Response>{

    let body = JSON.stringify(vehiculo);
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });


    return this.http.post('http://localhost:8085/wrapper',body,options);


   }

   Obtenerdeotramanera():Observable<Response>{


  return this.http.get('http://localhost:8085/vehiculo');

   }


  }
