import { RestService } from './../../services/rest.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-product-details-user',
  templateUrl: './product-details-user.component.html',
  styleUrls: ['./product-details-user.component.css']
})
export class ProductDetailsUserComponent implements OnInit {

  public detalles: any=[];
  public colores: any= [];
  public tallas: any= [];

  public nombre: any


  public image:string | undefined;

  public high=Math.round(this.getRandomArbitrary(500,499));
  public width=Math.round(this.getRandomArbitrary(500,499))

  constructor(private route:ActivatedRoute, private RestService:RestService, private Carrito:CarritoService) { }

  ngOnInit(): void {
    this.image="https://picsum.photos/"+this.width+"/"+this.high+""    

    this.route.paramMap.subscribe((paramMap:any) =>{
      const {params} = paramMap
      this.nombre = params.nombre          
    })
    console.log(this.nombre)
    this.cargarData(this.nombre)      
    
    /*this.cargarColores()
    this.cargarTallas()
    console.log(this.detalles)*/

  }

  public getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  public cargarData(param:string){
    this.RestService.get('http://localhost:8080/productos/buscarc?nompro='+param)
    .subscribe((respuesta:any)=>{
      this.detalles=respuesta
      this.cargarColores()
      this.cargarTallas()
      console.log(this.detalles)
      
    })
  }

  public cargarColores(){
    let bool = true
    let nuevo = ""
    for(let producto of this.detalles){
      nuevo = producto.color
      bool = true
      for(let color of this.colores){
        if(color === producto.color){
          bool = false
        }
      }
      if(bool){
        this.colores.push(nuevo)
      }
      
    }
    console.log(this.colores)
  }

  public cargarTallas(){
    let bool = true
    let nuevo = ""
    for(let producto of this.detalles){
      nuevo = producto.talla
      bool = true

      for(let talla of this.tallas){
        if(talla === producto.talla){
          bool = false
        }
      }
      if(bool){
        this.tallas.push(nuevo)
      }
      
    }
    console.log(this.tallas)
  }

  public agregarCarrito(){
    if(confirm("Agregar este producto al carrito")){
      console.log(this.detalles[0].nombre)
      console.log(this.detalles[0].idProducto)
      console.log(this.detalles[0].precio)
      console.log(this.detalles[0].color)
      console.log(this.detalles[0].talla)
      this.Carrito.setCache('carrito',{
        id: this.detalles[0].idProducto,
        nombre: this.detalles[0].nombre,
        precio: this.detalles[0].precio,
        cantidad: 1
        /*color: 'string',
        talla: 'string',*/
      });
    }

  }


  

}

