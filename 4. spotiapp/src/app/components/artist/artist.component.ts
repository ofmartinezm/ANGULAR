import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {SpotifyService} from "../../services/spotify.service";
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artista:any={};
  album:any={};
  pistas:any[]=[];

  constructor(private activatedRoute:ActivatedRoute,
    public _spotify:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
    .map(parametros=>parametros['id'])
      .subscribe(id=>{
        this._spotify.getArtista(id)
        .subscribe(artista=>{
          console.log(artista);
          this.artista=artista;
        });

        this._spotify.getTop(id)
          .map((respuesta:any)=>respuesta.tracks)
          .subscribe(album=>{
          console.log(album);
          this.pistas=album;
        });
      })
  }

}
