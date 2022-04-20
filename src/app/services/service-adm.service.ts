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
        return this.http.post('http://localhost:8080/categorias/add',categoria,{ responseType: 'text' });
    }
    modificarCategoria(categoria:Categoria){
        console.log("Modificar categoria");
        return this.http.put<Categoria>('http://localhost:8080/categorias/editar/'+categoria.idCategoria,{
            "nombre":categoria.nombre
        });
    }
    eliminarCategoria(categoria:Categoria){
        console.log("Eliminar categoria");
        return this.http.delete("http://localhost:8080/categorias/delete/"+categoria.idCategoria,{ responseType: 'text' });
    }
    getUsuarios(id:any){
        console.log("Obtener usuario");
        return this.http.get<Categoria[]>(this.Url);
    }
}
