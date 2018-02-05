import { Pipe, PipeTransform } from '@angular/core';

import {Lista} from '../clases/listas';

@Pipe({
  name: 'pendientes',
  pure:false
})
export class PendientesPipe implements PipeTransform {
  transform(listas: Lista[], estado: boolean=false): Lista[]{
    let listaFiltrada:Lista[]= [];
    for (let lista of listas) {
      console.log(lista.terminado);
        if(lista.terminado==estado){
          console.log('entra if'+lista.nombre);
          listaFiltrada.push(lista);
        }else{
          console.log('entra if'+lista.nombre);
        }
    }
      console.log(listaFiltrada);
      return listaFiltrada ;
  }
}
