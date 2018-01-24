import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DatosProvider} from '../../providers/datos/datos';
import {DetallePage} from '../detalle/detalle'
import {ModalController} from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
miLista:Array<any>=[
  {titulo:"primer elemento", id:1,descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {titulo:"segundo elemento", id:2,descripcion:"Sed efficitur mauris eget enim sodales pellentesque."},
  {titulo:"tercer elemento", id:3,descripcion:"Phasellus pulvinar augue quis enim pellentesque, ac pulvinar enim eleifend."},
  {titulo:"cuarto elemento", id:4,descripcion:"Curabitur maximus orci sed tortor commodo, in egestas mi porttitor."},
  {titulo:"quinto elemento", id:5,descripcion:"Donec non ipsum sed diam vulputate auctor."}



];
listaNombres=[];
  constructor(public navCtrl: NavController,public datosProvider:DatosProvider, public modalController: ModalController) {
    this.loadData();
  }

loadData(){
    this.datosProvider.getData()
    .then(data=>{
      console.log(data);

      this.listaNombres=this.listaNombres.concat(data);
    })
    .catch(err=>{
      console.log(err);
    })

  }

  doInfinite($event){
    setTimeout(()=>{
      this.loadData();
      $event.complete();
    }, 500
    )
  }

  irDetalle(item){
    this.navCtrl.push(DetallePage,{datos:item});
  }
  abreModal(item){
  let modal=  this.modalController.create(DetallePage,{datos:item, modal:true});
  modal.present();

  }



}
