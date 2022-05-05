import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-categories-user',
  templateUrl: './list-categories-user.component.html',
  styleUrls: ['./list-categories-user.component.css']
})
export class ListCategoriesUserComponent implements OnInit {

  public listCategorias:any = []

  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  public cargarCategorias(){
    this.RestService.get('http://localhost:8080/categorias/todos')
    .subscribe(respuesta=>{
      this.listCategorias = respuesta
    })
  }

  public productosCategoria(categoria: string){
    console.log(categoria)
  }

}
