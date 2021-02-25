import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  //Una interface es decirle a typescript y angular que tal objeto tendra esos campos
  /* info: any = {};  *///para que no tenga el tipo any podemos crear una interface

  info: infoPagina ={};
  cargada = false;


  constructor(private http: HttpClient) {
    console.log('Servicio Listo!!');

    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: infoPagina) => {

        this.cargada = true;
        this.info = resp;
        console.log(resp);

      })

  }
}
