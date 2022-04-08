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
    buscarProductoPorID(name:String){
        console.log("Buscar productos por ID");
        return this.http.get<Producto[]>('http://localhost:8080/productos/buscar?nombre='+name);
    }
    agregarProducto(producto:Producto){
        console.log("Agregar producto");
        return this.http.post<Producto>('http://localhost:8080/productos/add',{
            "nombre": producto.nombre,
            "descripcion": producto.descripcion,
            "precio": producto.precio,
            "idCategoria": producto.idCategoria
          });
    }
    actualizarProducto(idProducto:number,producto:Producto){
        console.log("Actualizar producto service-producto");
        return this.http.put<Producto>('http://localhost:8080/productos/update/'+idProducto,{
            "nombre":producto.nombre,
            "descripcion":producto.descripcion,
            "precio":producto.precio,
            "idCategoria":producto.idCategoria
        });
    }
    eliminarProducto(producto:Producto){
        console.log("Eliminar producto service-producto");
        return this.http.delete<Producto>("http://localhost:8080/productos/delete/"+producto.idProducto);
    }
}
