import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoUsuariosService {

  equipo: any=[];
  cargada = false;

  constructor(private http: HttpClient) {
      console.log('Servicio Usuario Listo!!');
      this.cargarEquipo();
  }

  private cargarEquipo(){
    //leer archivo
    this.http.get('https://angular-html-webapp-5a215-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (data: any) => {
      console.log(data);
      this.cargada=true;
    })
  }
}



