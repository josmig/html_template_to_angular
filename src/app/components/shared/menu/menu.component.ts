import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public _infoServicio: InfoPaginaService) {

  }

  ngOnInit(): void {
  }

}
