import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarritoService } from './../../services/carrito.service';
import { Product } from './../../models/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-carrito-user',
  templateUrl: './list-carrito-user.component.html',
  styleUrls: ['./list-carrito-user.component.css']
})
export class ListCarritoUserComponent implements OnInit {

  listaProductos: Product[] | undefined
  total:number | undefined;

  public productoForm!: FormGroup;

  public image:string | undefined;
  public high=Math.round(this.getRandomArbitrary(150,149));
  public width=Math.round(this.getRandomArbitrary(150,149))

  constructor(private Carrito:CarritoService, private formBuilde: FormBuilder) { }

  ngOnInit(): void {
    this.image="https://picsum.photos/"+this.width+"/"+this.high+""

    this.Carrito.getObs('carrito').subscribe(carrito=>{
      this.listaProductos = carrito
      this.total=this.costoTotal(this.listaProductos);
    })

    this.productoForm = this.formBuilde.group({
      cantidad: ['']
    });
  }



  public getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  deleteData(producto:Product){
    this.Carrito.deleteData('carrito',producto)
  }
  costoTotal(productos:Product[]){
    let total = 0
    for(let i=0;i<productos.length; i++){
      total = total + productos[i].cantidad*productos[i].precio
    }
    return total;
  }
  mostrarCantidad(){
    console.log("prueba")
  }

}
