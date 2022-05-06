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
  pagina:number=0;
  constructor(private service:ServiceProductoService, private router: Router) {
      console.log("Clase ProductosTiendaComponent");
      this.nombre="";
  }
  ngOnInit(): void {
    this.nombre="";
    this.obtenerTodosProductos();
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
    this.service.getProductos(this.pagina).subscribe((data:any)=>{
      this.productos=data.content;
      this.max=data.totalPages-1;
      if(this.productos?.length==0){
        window.alert("Error al cargar productos");
      }
    })
    
  }
  deshabilitarProducto(idProducto:number){
    console.log("Habilitar producto");
    this.service.deshabilitarProducto(idProducto).subscribe(data=>{
      this.obtenerTodosProductos();
    })
  }
  habilitarProducto(idProducto:number){
    console.log("Deshabilitar producto");
    this.service.habilitarProducto(idProducto).subscribe(data=>{
      this.obtenerTodosProductos();
    })
  }
  max:number=0;
  siguientePagina(){
    console.log("Pagina:"+this.pagina);
    console.log("Max:"+this.max);
    this.pagina=(this.pagina<this.max)?this.pagina+1:this.pagina;
    this.obtenerTodosProductos();
  }
  anteriorPagina(){
    this.pagina=(this.pagina>0)?this.pagina-1:0;
    this.obtenerTodosProductos();
  }
}
