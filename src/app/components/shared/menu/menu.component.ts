import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public _infoServicio: InfoPaginaService,
              private route: Router) {

  }

  ngOnInit(): void {
  }

  buscarProducto(termino: string){

    if(termino.length < 1){
      return;
    }
    this.route.navigate(['/search',termino])
    console.log(termino);

  }

}
