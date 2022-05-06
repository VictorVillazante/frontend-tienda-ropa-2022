import { Product } from './../models/Product';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Detalle } from '../models/Detalle';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos: Detalle[];
  productos$: Subject<Detalle[]>;

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
  deleteData(key: string, producto: Detalle){
    for(let i=0;i<this.productos.length; i++){
      if(producto == this.productos[i]){
        this.productos.splice(i,1);
        localStorage.setItem(key,JSON.stringify(this.productos))
        this.productos$.next(this.productos)
      }
    }
  }

  setCache(key: string, data:Detalle){
    
    let productos: Detalle[]=[];
    let aux = true
    if(localStorage.getItem(key)===null){
      
      localStorage.setItem(key,'['+JSON.stringify(data)+']')
      this.productos.push(data)
      this.productos$.next(this.productos)
      console.log("iniciando cache: producto nuevos")
    }
    else{
      for(let i=0;i<this.productos.length; i++){
        if(data.nombre == this.productos[i].nombre){
            console.log("producto repetido")
            this.productos[i].cantidad++;
            this.productos$.next(this.productos)    
            localStorage.setItem(key,JSON.stringify(this.productos))                   
            aux = false
        }
      }
      if(aux){
        console.log("producto nuevo")
        productos = JSON.parse(''+localStorage.getItem(key));      
        productos.push(data)
        localStorage.setItem(key,JSON.stringify(productos))
        this.productos.push(data)
        this.productos$.next(this.productos)
      }

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

  costoTotal(productos:Detalle[]){
    let total = 0
    for(let i=0;i<productos.length; i++){
      total = total + productos[i].precio
    }
    return total;
  }

  getObs(key: string): Observable<Detalle[]>{
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
  modificar(key: string, data: Detalle){
    for(let i=0;i<this.productos.length; i++){
      if(data.nombre == this.productos[i].nombre){
          this.productos[i].cantidad= data.cantidad;
          this.productos$.next(this.productos)    
          localStorage.setItem(key,JSON.stringify(this.productos))
      }
    }
  }
}
