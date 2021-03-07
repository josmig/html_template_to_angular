import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-searh',
  templateUrl: './searh.component.html',
  styleUrls: ['./searh.component.css']
})
export class SearhComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
        .subscribe( p => {
          console.log(['termino']); //viene del app.router
          this.productoService.buscarProducto(p ['termino'])

        })
  }

}
