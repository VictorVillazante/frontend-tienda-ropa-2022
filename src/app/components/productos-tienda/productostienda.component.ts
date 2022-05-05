import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { ServiceProductoService } from '../../services/service-producto.service';
import { Producto } from 'src/app/models/Producto';
@Component({
  selector: 'app-productos-tienda',
  templateUrl: './productostienda.component.html',
  styleUrls: ['./productostienda.component.css']
})
export class ProductosTiendaComponent implements OnInit{
  nombre:string="";
  productos:Producto[] | undefined;

  constructor(private service:ServiceProductoService, private router: Router) {
      console.log("Clase ProductosTiendaComponent");
      this.nombre="";
  }
  ngOnInit(): void {
    this.nombre="";
    this.service.getProductos().subscribe(data=>{
      this.productos=data;
    })
  }
  direccionarABMproductos(nombre:any){
    this.router.navigate(['menuprincipal/abmproductos',nombre]);
  }
  crearNuevoProducto(){
    this.router.navigate(['menuprincipal/abmproductos']);
  }
  obtenerProductosSimilares(){
    this.service.buscarVariosProductosPorNombre(this.nombre).subscribe(data=>{
      this.productos=data;
      if(this.productos?.length==0){
        window.alert("No se encontraron coincidencias");
      }
    })
    
  }
  obtenerTodosProductos(){
    this.service.getProductos().subscribe((data:any)=>{
      this.productos=data.content;
      if(this.productos?.length==0){
        window.alert("Error al cargar productos");
      }
    })
    
  }
  deshabilitarProducto(idProducto:number){
    this.service.deshabilitarProducto(idProducto).subscribe(data=>{
      this.obtenerTodosProductos();
    })
  }
  habilitarProducto(idProducto:number){
    this.service.habilitarProducto(idProducto).subscribe(data=>{
      this.obtenerTodosProductos();
    })
  }
}
