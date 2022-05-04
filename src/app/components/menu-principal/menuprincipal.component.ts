import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-menu-principal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuPrincipalComponent implements OnInit{
  constructor(private router: Router) {
      console.log("Clase ABMproductosComponent")
  }
  ngOnInit(): void {
  }
  verProductosTienda() {
    this.router.navigate(['menuprincipal/productostienda']);
  }
  verCategorias(){
    console.log("Categorias");
  }
  verUsuarioTienda(){
    this.router.navigate(['menuprincipal/listadousuario']);
  }
  verCategoriaProducto(){
    this.router.navigate(['menuprincipal/categoriaproducto']);
  }
  verVentasProductos(){
    this.router.navigate(['menuprincipal/ventasproductos']);
  }
}
