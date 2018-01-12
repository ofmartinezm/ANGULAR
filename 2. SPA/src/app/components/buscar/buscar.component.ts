import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',

})
export class BuscarComponent implements OnInit {

  termino:string;
  heroes:any[]=[];

  constructor(private activatedRoute:ActivatedRoute,
            private _heroesService:HeroesService) {



  }

  ngOnInit() {
    console.log( "buscar");

    this.activatedRoute.params.subscribe(params=>{
      this.termino=params['termino'];
    console.log(params['termino']);
    console.log("_buscar00");
    this.heroes=this._heroesService.buscarHeroe(params['termino']);
    console.log(this.heroes);
    })

  }

}
