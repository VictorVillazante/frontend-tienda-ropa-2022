import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/Producto';
import { ProductosSinStock } from '../models/ProductosSinStock';
@Injectable({
    providedIn:'root'
})
export class ServiceProductoService{
    constructor(private http:HttpClient){}
    Url='http://localhost:8080/productos/todos?page=0&size=10';
    getProductos(page:number){
        console.log("Obtener productos");
        return this.http.get<Producto[]>('http://localhost:8080/productos/todos?page='+page+'&size=10');
    }
    buscarProductoPorID(name:String){
        console.log("Buscar productos por ID");
        return this.http.get<Producto[]>('http://localhost:8080/productos/buscar?nombre='+name);
    }
    buscarVariosProductosPorNombre(name:String){
        console.log("Buscar varios productos por nombre");
        return this.http.get<Producto[]>(' http://localhost:8080/productos/coincidencias?coincidencias='+name);
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
    getProductosSinStock(){
        console.log("Obtener productos sin stock");
        return this.http.get<ProductosSinStock[]>("http://localhost:8080/productos/productosSinStock");
    }
    getProductosPocoStock(){
        console.log("Obtener productos con stock menor a 10");
        return this.http.get<ProductosSinStock[]>("http://localhost:8080/productos/productosPocoStock");
    }
    habilitarProducto(id:number){
        console.log("Actualizar producto service-producto");
        return this.http.put<Producto>('http://localhost:8080/productos/habilitar/'+id,{})
    }
    deshabilitarProducto(id:number){
        console.log("Actualizar producto service-producto");
        return this.http.put<Producto>('http://localhost:8080/productos/deshabilitar/'+id,{});
    }
}
