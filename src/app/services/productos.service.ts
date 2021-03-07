import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto } from './../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto : Producto[] = [];

  productosFiltrado: Producto[] = [];



  constructor(private http: HttpClient) {
    this.cargarProductos();

  }

  private cargarProductos(){

    return new Promise((resolve, reject ) => {
    /* https://angular-html-webapp-5a215-default-rtdb.firebaseio.com/productos_idx.json */
    /* this.http.get(`https://angular-html-webapp-5a215-default-rtdb.firebaseio.com/${url}`) */
        this.http.get('https://angular-html-webapp-5a215-default-rtdb.firebaseio.com/productos_idx.json')
          .subscribe((data: Producto[] ) => {
            console.log(data);
            this.producto= data;
            setTimeout(() => {
              this.cargando = false;
            },2000);
          });
    });

  }

  getProducto(id: string){
    return this.http.get(`https://angular-html-webapp-5a215-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  buscarProducto(termino: string){

    if(this.producto.length === 0){
      //cargar productos
      this.cargarProductos().then(() => {
        //ejecutar despues de tener los productos
        this.filtrarProductos(termino);
      });
    }else{
      //aplicar filtro
      this.filtrarProductos(termino);
    }

  }
  private filtrarProductos(termino: string){
    /* console.log(this.producto); */

    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.producto.forEach(prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino) >= 0 || prod.titulo.indexOf(termino) >=0){
        this.productosFiltrado.push(prod);
      }
    })
  }
}
