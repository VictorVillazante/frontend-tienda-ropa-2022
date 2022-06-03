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
    this.router.navigate(['/menuprincipal/menuprincipalopciones']);
  }
  verListadoDeProductos(){
    this.router.navigate(['/menuprincipal/productostienda']);
  }
  verABMProductos(){
    this.router.navigate(['/menuprincipal/abmproductos']);
  }
  verListaUsuarios(){
    this.router.navigate(['/menuprincipal/listadousuario']);
  }
  verABMUsuarios(){
    this.router.navigate(['/menuprincipal/gestionusuario']);
  }
  verDashboard(){
    this.router.navigate(['/menuprincipal/dashboard/general/2000']);
  }
  salirPaginaPrincipal(){
    this.router.navigate(['/']);
  }
}
