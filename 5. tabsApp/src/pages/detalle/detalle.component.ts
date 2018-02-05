import { Component, OnInit } from '@angular/core';
import {NavController,NavParams,AlertController} from 'ionic-angular';
import {Lista,ListaItem} from '../../app/clases/index';

import {ListaDeseosService} from '../../app/services/listadeseos.service';





@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {
  idx:number;
  lista:any;
  constructor(public nvctrl:NavController, public navpr:NavParams,
  public _listaDeseos:ListaDeseosService,public alertCtrl:AlertController) {
    //console.log(this.navpr);
    this.idx=this.navpr.get("i");
    this.lista=this.navpr.get("deseos");
   }



  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado=!item.completado;
    let todosmarcados:boolean=true;
    for(let item of this.lista.items){

      if (!item.completado){

        todosmarcados=false;
        break;
      }
    }

    this.lista.terminado=todosmarcados;
    console.log('entra actualizar terminado'+this.lista.terminado +"--"+this.lista.nombre);
    console.log('entra actualizar terminada'+this.lista.terminada +"--"+this.lista.nombre);
    this._listaDeseos.actualizarData();
  }

  borrarItem(idx){
    let confirm = this.alertCtrl.create({
    title: 'Desea Borrar este Item?',
    message: 'esta seguro que quiere borrar este Item??',
    buttons: [
      {
        text: 'Disagree',
        handler: () => {
          //console.log('Cancelar Peticion');
          return;
        }
      },
      {
        text: 'Agree',
        handler: () => {
          //console.log('Aceptar peticion');
          this._listaDeseos.eliminarLista(this.idx);
          this.nvctrl.pop();

        }
      }
    ]
    });
    confirm.present();

  }
}
