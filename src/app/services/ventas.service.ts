import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VentasAux } from '../models/VentasAux';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http:HttpClient) { }
  getVentas(){
    console.log("Obtener ventas");
    return this.http.get<VentasAux[]>('http://localhost:8080/ventas/productos/todos');
  }
}
