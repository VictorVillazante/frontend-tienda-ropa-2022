import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/Categoria';
@Injectable({
    providedIn:'root'
})
export class ServiceAdm{
    constructor(private http:HttpClient){}
    Url='http://localhost:8080/categorias/todos'
    getCategorias(){
        console.log("Obtener categorias");
        return this.http.get<Categoria[]>(this.Url);
    }
    agregarCategoria(categoria:Categoria){
        console.log("Agregar categoria");
        return this.http.post<Categoria>('http://localhost:8080/categorias/add',categoria);
    }
    getUsuarios(id:any){
        console.log("Obtener usuario");
        return this.http.get<Categoria[]>(this.Url);
    }
}
