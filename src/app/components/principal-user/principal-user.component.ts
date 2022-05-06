import { Categoria } from 'src/app/models/Categoria';
import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-user',
  templateUrl: './principal-user.component.html',
  styleUrls: ['./principal-user.component.css']
})
export class PrincipalUserComponent implements OnInit {

  title = 'backend-tienda-ropa';

  subtitulo= ""

  public listaProductos:any = []
  

  public page=0

  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.cargarData(this.page,8);
    this.subtitulo="Diseños originales XD"
  }

  public cargarData(page:number, size:number){
    this.RestService.get('http://localhost:8080/productos/todos?page='+page+'&size='+size)
    //this.RestService.get('http://localhost:8080/productos/todos')
    .subscribe((respuesta:any)=>{
      this.listaProductos = respuesta.content
    })
  }

  /*public cargarCategorias(){
    this.RestService.get('http://localhost:8080/categorias/todos')
    .subscribe(respuesta=>{
      this.listCategorias = respuesta
    })
  }*/

  /*public productosCategoria(categoria:Categoria){
    this.RestService.get('http://localhost:8080/productos/categoria?id_categoria='+categoria.idCategoria)
    .subscribe(respuesta=>{
      this.listaProductos = respuesta
    })
    this.subtitulo = "CATEGORIA: "+categoria.nombre
  }*/

  public mas (){
    this.page++
    this.cargarData(this.page,8)
  }
  public menos (){
    if(this.page>0){
      this.page--
      this.cargarData(this.page,8)
    }

  }

}