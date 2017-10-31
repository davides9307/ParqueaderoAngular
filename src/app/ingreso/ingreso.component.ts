import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../service/vehiculos.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

nombre:string = "David";
marca:string ;

 vehiculos:any[]=[];
  constructor(private _vehiculosServicios:VehiculosService) {

  _vehiculosServicios.ObtenerVehiculos().subscribe(datos=>{
      this.vehiculos=datos;
    console.log(datos);

    var[slot] = this.vehiculos;
    var {idvehiculo,cilindraje,marca,matricula,fechaentrada} =slot.idvehiculo;

this.marca = slot.idvehiculo.marca;



   console.log(slot);
  console.log(marca,cilindraje);
  console.log(this.vehiculos);


  });


   }

  ngOnInit() {
  }

}
