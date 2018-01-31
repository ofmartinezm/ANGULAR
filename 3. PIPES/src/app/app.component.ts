import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre='fernando';
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI='3.141618';
  fecha='2017-01-01';
  nombre2="oscar fernando marTInez masmela"
  heroe={
    nombre:"logan",
    clave:"wolverine",
    direccion:{
      calle:"primera",
      casa: 19
    }
  };
    valorDePromesa=new Promise( (resolve, reject)=>{
      setTimeout( ()=>resolve('llego data!'),3500);

    });


  

}
