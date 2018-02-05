import { Component, OnInit } from '@angular/core';
import {ListaDeseosService} from '../../app/services/listadeseos.service';
import {NavController} from "ionic-angular";
import {DetalleComponent} from '../detalle/detalle.component';


@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor(public _lista:ListaDeseosService,
    private navCtrl:NavController) {  }

  ngOnInit() {}
  verDetalle(deseos, i){
    this.navCtrl.push(DetalleComponent,{deseos,i });

  }
}
