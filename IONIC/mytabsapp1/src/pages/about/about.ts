import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  seleccion: string="grupo1";
  constructor(public navCtrl: NavController) {

  }

}
