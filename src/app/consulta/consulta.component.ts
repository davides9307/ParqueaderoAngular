import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../service/vehiculos.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

 vehiculos:any[]=[];



  constructor(private _vehiculosServicios:VehiculosService) {

  _vehiculosServicios.ObtenerVehiculos().subscribe(datos=>{
      this.vehiculos=datos;






  });


   }



  ngOnInit() {
  }

}
