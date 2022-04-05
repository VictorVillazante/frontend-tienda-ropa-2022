import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../Model/Categoria';
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
}
