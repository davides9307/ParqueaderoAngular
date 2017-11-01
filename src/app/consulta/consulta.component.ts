  import { Component, OnInit } from '@angular/core';
  import {VehiculosService} from '../service/vehiculos.service';

  @Component({
    selector: 'app-consulta',
    templateUrl: './consulta.component.html',
    styleUrls: ['./consulta.component.css']
  })
  export class ConsultaComponent implements OnInit {

   vehiculos:any[]=[];

   fechas:String[]=[];



    constructor(private _vehiculosServicios:VehiculosService) {

    _vehiculosServicios.ObtenerVehiculos().subscribe(datos=>{
    this.vehiculos=datos;

   //this.fecha=this.vehiculos[0].idvehiculo.fechaentrada;
for (let i = 0; i <this.vehiculos.length; i++) {

  let fecha = ` ${this.vehiculos[i].idvehiculo.fechaentrada[0]} / ${this.vehiculos[i].idvehiculo.fechaentrada[1]} / ${this.vehiculos[i].idvehiculo.fechaentrada[2]}   /${this.vehiculos[i].idvehiculo.fechaentrada[3]} : ${this.vehiculos[i].idvehiculo.fechaentrada[4]}`;
  this.fechas[i] =fecha;


}


   console.log(this.vehiculos);
   console.log(this.fechas);




    });


     }



  ngOnInit() {
  }

}
