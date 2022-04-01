import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-descripcion-productos',
  templateUrl: './descripcionproductos.component.html',
  styleUrls: ['./descripcionproductos.component.css']
})
export class DescripcionProductosComponent implements OnInit{
  constructor(private router: Router) {
      console.log("Clase ABMproductosComponent")
  }
  ngOnInit(): void {
  }
}
