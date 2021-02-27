import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { infoUsuario } from '../interfaces/info-usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoUsuariosService {

  equipo: infoUsuario={};

  constructor(private http: HttpClient) {
      console.log('Servicio Usuario Listo!!');
      this.cargarEquipo();
  }

  private cargarEquipo(){
    //leer archivo
    this.http.get('https://angular-html-webapp-5a215-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (data: infoUsuario) => {

      this.equipo = data;
      console.log(data);

    })
  }
}



