import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Model/Producto';
@Injectable({
    providedIn:'root'
})
export class ServiceProductoService{
    constructor(private http:HttpClient){}
    Url='http://localhost:8080/productos/todos'
    getProductos(){
        console.log("Obtener productos");
        return this.http.get<Producto[]>(this.Url);
    }
}
