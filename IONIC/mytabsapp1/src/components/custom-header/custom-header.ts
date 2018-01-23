import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../../pages/info/info';

/**
 * Generated class for the CustomHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeaderComponent {
  @Input()
  titulo: string;

  constructor(public navCtrl: NavController) {

  }

  irInfo(){
    this.navCtrl.push(InfoPage);

  }

}
