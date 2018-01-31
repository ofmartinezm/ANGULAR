import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import   "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {
  longitud:number=0;
  artistas: any[]=[];
  canciones: any={};
  urlSpotify:string='https://api.spotify.com/v1/';
  token:string='BQDTlqU-Sn4sbozkSyDYSA1hNH-vGv1gj4wQ8D0p0cu1StD7ViwczLqLfXFXZ4dg8FpiEziaKR8NSU16n0w';
  constructor(public http:HttpClient) {
    console.log('servicio de spotify listo!!');
   }
   private getHeaders():HttpHeaders{
     let headers = new HttpHeaders({
       'Authorization':'Bearer '+this.token
     });

     return headers;

   }

   getArtistas(termino:string){
     let url=`${this.urlSpotify}search?query=${ termino }&type=artist&limit=20`;

     let headers = this.getHeaders();
     return this.http.get(url, {headers:headers})
      .map((respuesta:any)=>{
        this.artistas=respuesta.artists.items;
        return this.artistas;
     });


   }

   getArtista(id:string){
     let url=`${this.urlSpotify}artists/${ id }`;

     let headers = this.getHeaders();
     return this.http.get(url, {headers:headers})
     //  .map((respuesta:any)=>{
     //    this.artistas=respuesta.artists.items;
     //    return this.artistas;
     // });

   }

   getTop(id:string){
     let url=`${this.urlSpotify}artists/${ id }/top-tracks?country=US`;

     let headers = this.getHeaders();
     return this.http.get(url, {headers:headers});



   }

}
