import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VentasAux } from '../models/VentasAux';
import { ComprasUsuario } from '../models/ComprasUsuario';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http:HttpClient) { }
  getVentas(){
    console.log("Obtener ventas");
    return this.http.get<VentasAux[]>('http://localhost:8080/ventas/productos/todos');
  }
  getVentasUsuarios(id:any){
    console.log("Obtener compras/ventas de usuarios");
    return this.http.get<ComprasUsuario[]>('http://localhost:8080/compra/todos/usuario/'+id);

  }
}
