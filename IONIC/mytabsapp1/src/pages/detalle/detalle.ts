import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  item;
  modal:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController:ViewController) {
    this.item=navParams.data.datos;
if(navParams.data.modal){
  this.modal=navParams.data.modal;

}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  Cerrar(){
    this.viewController.dismiss();
  }



}
