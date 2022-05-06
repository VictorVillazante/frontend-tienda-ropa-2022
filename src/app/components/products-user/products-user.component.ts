import { Producto } from './../../models/Producto';
import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-user',
  templateUrl: './products-user.component.html',
  styleUrls: ['./products-user.component.css']
})
export class ProductsUserComponent implements OnInit {

  public nombre= ""
  public categoria = ""


  productos:Producto[] | undefined;

  constructor(private route:ActivatedRoute, private RestService:RestService) { }

  

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) =>{
      const {params} = paramMap
      this.nombre = params.nombre
      console.log(this.nombre)
      this.categoria = params.categoria
      console.log(this.categoria)
    })
    if(this.nombre == null){
      console.log("Se carga categoria")
      this.cargarCategoria(this.categoria)
      
    }
    else{
      console.log("Se carga busqueda")
      this.cargarBusqueda(this.nombre)
    }  

  }

  public cargarBusqueda(param:string){
    this.RestService.get('http://localhost:8080/productos/coincidencias?coincidencias='+param)
    .subscribe((respuesta:any)=>{
      this.productos=respuesta
      console.log(this.productos)
      console.log(this.productos?.length)  
    })
  }
  public cargarCategoria(param:string){
    this.RestService.get('http://localhost:8080/productos/categoria?id_categoria='+param)
    .subscribe((respuesta:any)=>{
      this.productos=respuesta
      console.log(this.productos)      
    })
  }

}
