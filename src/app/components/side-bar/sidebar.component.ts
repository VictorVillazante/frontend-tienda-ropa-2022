import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { ServiceProductoService } from '../../services/service-producto.service';
import { Producto } from 'src/app/models/Producto';
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent implements OnInit{

  constructor( private router: Router) {
  }
  ngOnInit(): void {
    
  }
  verMenuPrincipal(){
    this.router.navigate(['menuprincipal']);
  }
  verListadoDeProductos(){
    this.router.navigate(['productostienda']);
  }
  verABMProductos(){
    this.router.navigate(['abmproductos']);
  }
  verListaUsuarios(){
    this.router.navigate(['listadousuario']);
  }
  verABMUsuarios(){
    this.router.navigate(['gestionusuario']);
  }
}
