import { Product } from './../models/Product';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos: Product[];
  productos$: Subject<Product[]>;

  constructor() { 
    this.productos =[
      /*{
        id: 1,
        nombre: 'string',
        precio: 25,
        cantidad: 21
        /*color: 'string',
        talla: 'string',
      },*/
    ];
    this.productos$ = new Subject();
  }

  /*getCarrito() {
    return this.productos
  }
  setCarrito(producto: Product){
    this.productos.push(producto)
  }*/
  deleteData(key: string, producto: Product){
    for(let i=0;i<this.productos.length; i++){
      if(producto == this.productos[i]){
        this.productos.splice(i,1);
        localStorage.setItem(key,JSON.stringify(this.productos))
        this.productos$.next(this.productos)
      }
    }
  }

  setCache(key: string, data:Product){
    this.productos.push(data)
    this.productos$.next(this.productos)

    let productos: Product[]=[];
    if(localStorage.getItem(key)===null){
      productos.push(data)
      localStorage.setItem(key,'['+JSON.stringify(data)+']')
    }
    else{
      productos = JSON.parse(''+localStorage.getItem(key));      
      productos.push(data)
      localStorage.setItem(key,JSON.stringify(productos))
    }
  }
    
  getCache(key: string){
    if(localStorage.getItem(key)===null){
      return this.productos;
    }
    else{
      this.productos = JSON.parse(''+localStorage.getItem(key));
      return this.productos;
    }
  }

  remove(key:string):void {
    try{
      localStorage.removeItem(key);
    }catch(e){
      console.error('Error removing key', e)
    }
  }

  clear():void {
    try{
      localStorage.clear();
    }catch(e){
      console.error('Error cleaning localstorage', e)
    }
  }

  costoTotal(productos:Product[]){
    let total = 0
    for(let i=0;i<productos.length; i++){
      total = total + productos[i].precio
    }
    return total;
  }

  getObs(key: string): Observable<Product[]>{
    if(localStorage.getItem(key)===null){
      this.productos$.next(this.productos)
      return this.productos$.asObservable()
    }
    else{
      this.productos = JSON.parse(''+localStorage.getItem(key));
      this.productos$.next(this.productos)
      return this.productos$.asObservable()
    }
  }
  modificar(key: string, producto: Product){
    for(let i=0;i<this.productos.length; i++){
      if(producto == this.productos[i]){
        this.productos[i].cantidad = producto.cantidad
        localStorage.setItem(key,JSON.stringify(this.productos))
      }
    }
  }
}
