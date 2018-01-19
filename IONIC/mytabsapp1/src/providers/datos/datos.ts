import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the DatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatosProvider {

  constructor(public http: Http) {
    console.log('Hello DatosProvider Provider');
  }

  public getData(){
  console.log('entra getData');
  return new Promise(
    resolve=>{
      this.http.get("http://dev.contanimacion.com/RESTcursos/all")
        .map(res=>res.json())
        .subscribe(data=> {
          console.log('entra provider');
            resolve(data);
          }
        )
    }
  )
}



}
