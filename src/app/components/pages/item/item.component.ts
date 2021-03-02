import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescp } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private  route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {
          this.productoService.getProducto(parametros['id'])
            .subscribe((producto: ProductoDescp) =>  {
              console.log(producto);
            })
    });

  }

}
