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

  /*public mostrarCarrito(){
    return (this.Carrito.getCarrito('1'))
  }*/
  


}