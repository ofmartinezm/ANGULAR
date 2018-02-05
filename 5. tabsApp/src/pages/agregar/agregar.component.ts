import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import {Lista, ListaItem} from "../../app/clases/index";

import {ListaDeseosService} from '../../app/services/listadeseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {
  nombreLista:string="";
  nombreItem:string="";

  items:ListaItem[]=[];

  constructor(public alertCtrl:AlertController,
     public navController:NavController,public _listaDeseos:ListaDeseosService) {  }

  ngOnInit() {}

  agregar(){
    if(this.nombreItem.length==0){
      return;
    }
    let item=new ListaItem();
    item.nombre=this.nombreItem;

    this.items.push(item);
    this.nombreItem="";

  }

  borrarItem(id:number){
      this.items.splice(id,1);
  }

  guardarLista(){
    if (this.nombreLista.length==0) {
      let alert = this.alertCtrl.create({
        title: 'Nombre de la Lista',
        subTitle: 'el nombre de la lista es obligatorio',
        buttons: ['OK']
      });
      alert.present();
        return;
    }

    let lista=new Lista(this.nombreLista);
    lista.items=this.items;
    //this._listaDeseos.listas.push(lista);
    this._listaDeseos.agregarLista(lista);

    this.navController.pop();

  }
}
