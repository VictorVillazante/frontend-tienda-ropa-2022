import { CarritoService } from './../../services/carrito.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-user',
  templateUrl: './cards-user.component.html',
  styleUrls: ['./cards-user.component.css']
})
export class CardsUserComponent implements OnInit {

  @Input() dataEntrante: any;

  public high=Math.round(this.getRandomArbitrary(300,250));
  public width=Math.round(this.getRandomArbitrary(200,150))
  
  public image:string | undefined;

  constructor(private Carrito:CarritoService) { }

  ngOnInit(): void {
    this.image="https://picsum.photos/"+this.width+"/"+this.high+""
  }
  public getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  public agregarCarrito(){
    console.log(this.dataEntrante)
    this.Carrito.setCache('carrito',{
      id: this.dataEntrante.idProducto,
      nombre: this.dataEntrante.nombre,
      precio: this.dataEntrante.precio,
      cantidad: 1
      /*color: 'string',
      talla: 'string',*/
    });
    //console.log(this.Carrito.getCarrito());
    //console.log("Agregando datos al array")

  }
  /*public mostrarCarrito(){
    return (this.Carrito.getCarrito('1'))
  }*/
  


}