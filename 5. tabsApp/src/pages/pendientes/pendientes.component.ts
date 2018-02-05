import { Component, OnInit } from '@angular/core';
import {ListaDeseosService} from '../../app/services/listadeseos.service';
import {NavController} from "ionic-angular";
import {AgregarComponent} from '../agregar/agregar.component';
import {DetalleComponent} from '../detalle/detalle.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(private navCtrl:NavController,
    private _listaDeseos: ListaDeseosService) {  }

  ngOnInit() {}
  irAgregar(){
    this.navCtrl.push(AgregarComponent);
  }

  verDetalle(deseos, i){
    this.navCtrl.push(DetalleComponent,{deseos,i });

  }
}
