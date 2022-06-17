import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { Detalle } from 'src/app/models/Detalle';
import { CarritoService } from 'src/app/services/carrito.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compra-user',
  templateUrl: './compra-user.component.html',
  styleUrls: ['./compra-user.component.css']
})
export class CompraUserComponent implements OnInit {

  listaProductos: Detalle[] = [];
  total:number | undefined;

  id_new_compra:number | undefined

  public image:string | undefined;
  public high=Math.round(this.getRandomArbitrary(150,149));
  public width=Math.round(this.getRandomArbitrary(150,149))

  public form!: FormGroup;

  constructor(private Carrito:CarritoService, private RestService:RestService, private formBuilde: FormBuilder) { }

  ngOnInit(): void {

    this.image="https://picsum.photos/"+this.width+"/"+this.high+""

    this.Carrito.getObs('carrito').subscribe(carrito=>{
      this.listaProductos = carrito
      this.total=this.costoTotal(this.listaProductos);
    })

    this.form = this.formBuilde.group({
      NroTarjeta: ['',[Validators.required, Validators.minLength(12)]],
      CodigoSeguridad: ['',[Validators.required, Validators.minLength(3)]]
    })
    
    
  }

  public getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  deleteData(producto:Detalle){
    if(confirm("Borrar producto del carrito")){
      this.Carrito.deleteData('carrito',producto)
    }
  }

  costoTotal(productos:Detalle[]){
    let total = 0
    for(let i=0;i<productos.length; i++){
      total = total + productos[i].cantidad*productos[i].precio
    }
    return total;
  }

  modoificarCantidad(id:number){
    for(let producto of this.listaProductos){
      if(producto.id == id){
        console.log(producto);
        this.Carrito.modificar('carrito',producto)
      }
    }    
  }

  CrearCompra(){
    
    let now= new Date();
    console.log('La fecha actual es',now);
    console.log('Mes ',now.getMonth());
    console.log('Año ',now.getFullYear());
    console.log('Dia ',now.getDate());
    let todo = now.getFullYear()+"-"+this.formatData(now.getMonth())+"-"+this.formatData(now.getDate())
    console.log('Todo ',todo);

    this.RestService.post('http://localhost:8080/compra/add',
    {
      "fecha":todo,
      "idUsuario":3,
      "costoTotal":this.total
    }
    ).subscribe ((respuesta:any) =>{
      this.id_new_compra = respuesta.idCompra
      console.log(this.id_new_compra)
      for(let i=0;i<this.listaProductos.length; i++){
        this.RestService.post('http://localhost:8080/comprapr/add',
        {
          "idDisponibilidad":this.listaProductos[i].id,
          "cantidad":this.listaProductos[i].cantidad,
          "idCompra":this.id_new_compra
        }
        ).subscribe (respuesta =>{
          console.log("Producto añadido a compra Creada")
        })
      }
      window.open("http://localhost:8080/pdf/gen/"+this.id_new_compra)
    })


    

  }

  formatData(input: number){
    if (input > 9) {
      return input;
    } else return `0${input}`;
  };
  

  public Factura(){
    this.RestService.get('http://localhost:8080/pdf/gen/'+14)
    .subscribe((respuesta:any)=>{
      
    })
  }

}
