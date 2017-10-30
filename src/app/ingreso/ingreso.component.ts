import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../service/vehiculos.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {


 vehiculos:any[]=[];
  constructor(private _vehiculosServicios:VehiculosService) {

  _vehiculosServicios.ObtenerVehiculos().subscribe(datos=>{
      this.vehiculos=datos;
      console.log(datos);

  });


   }

  ngOnInit() {
  }

}
