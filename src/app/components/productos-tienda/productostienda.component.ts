import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-productos-tienda',
  templateUrl: './productostienda.component.html',
  styleUrls: ['./productostienda.component.css']
})
export class ProductosTiendaComponent implements OnInit{
  constructor(private router: Router) {
      console.log("Clase ABMproductosComponent")
  }
  ngOnInit(): void {
  }
  direccionarABMproductos(){
    this.router.navigate(['abmproductos']);
  }
}
