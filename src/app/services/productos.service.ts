import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto } from './../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto : Producto[] = [];



  constructor(private http: HttpClient) {
    this.cargarProductos();

  }

  private cargarProductos(){
    /* https://angular-html-webapp-5a215-default-rtdb.firebaseio.com/productos_idx.json */
    /* this.http.get(`https://angular-html-webapp-5a215-default-rtdb.firebaseio.com/${url}`) */
    this.http.get('https://angular-html-webapp-5a215-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((data: Producto[] ) => {
        console.log(data);
        this.producto= data;
        setTimeout(() => {
          this.cargando = false;
        },2000);
      })
  }

  getProducto(id: string){
    return this.http.get(`https://angular-html-webapp-5a215-default-rtdb.firebaseio.com/productos/${id}.json`)
  }


}
