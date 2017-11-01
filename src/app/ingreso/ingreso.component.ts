import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../service/vehiculos.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  vehiculo={
    "vehiculo":{



    matricula: "LDF903",
    cilindraje: "200",
    marca: "yamaha"

      },

    "slot":{
      tipoespacio:"moto"

    }



  };


  vehiculos=[];
  respuesta=[];

  constructor(private _vehiculosServicios:VehiculosService) {

  // _vehiculosServicios.GuardarVehiculos(this.vehiculo).subscribe(res=>{
  // this.respuesta =res.json();



    //  })

   }

   guardar(){
    
   this._vehiculosServicios.GuardarVehiculos(this.vehiculo).subscribe(res=>{
     this.respuesta =res.json();
   });

 }

  ngOnInit() {
  }



}
