import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { ServiceProductoService } from '../../service/service-producto.service';
import { Producto } from 'src/app/Model/Producto';
@Component({
  selector: 'app-productos-tienda',
  templateUrl: './productostienda.component.html',
  styleUrls: ['./productostienda.component.css']
})
export class ProductosTiendaComponent implements OnInit{

  productos:Producto[] | undefined;

  constructor(private service:ServiceProductoService, private router: Router) {
      console.log("Clase ABMproductosComponent")
  }
  ngOnInit(): void {
    this.service.getProductos().subscribe(data=>{
      this.productos=data;
    })
  }
  direccionarABMproductos(){
    this.router.navigate(['abmproductos']);
  }
}
