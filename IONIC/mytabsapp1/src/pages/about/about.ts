import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  seleccion: string="grupo1";
  constructor(public navCtrl: NavController, public alertController:AlertController) {

  }

  ShowAlert(){
    let alerta=  this.alertController.create({
      title: "Inforación",
      subTitle:"esto es una alerta del sistema",
      message:"esto es un mensaje",
      inputs:[{
        name:"nombre",
        placeholder:"tu nombre"
      }],
      buttons:[{
        text:"guardar",
        handler:data=>{
          console.log("enviar"+data.nombre)}
        },
        {
          text:"Cancelar",
          handler:data=>{
            console.log("cancelar")
          }}
      ]

    }

    );
    alerta.present();


  }

}
