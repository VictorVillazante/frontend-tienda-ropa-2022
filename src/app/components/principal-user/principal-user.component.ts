import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-user',
  templateUrl: './principal-user.component.html',
  styleUrls: ['./principal-user.component.css']
})
export class PrincipalUserComponent implements OnInit {

  title = 'backend-tienda-ropa';

  public listaProductos:any = []

  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('http://localhost:8080/productos/todos')
    .subscribe(respuesta=>{
      this.listaProductos = respuesta
    })
  }

}