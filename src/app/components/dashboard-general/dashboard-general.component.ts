import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-general',
  templateUrl: './dashboard-general.component.html',
  styleUrls: ['./dashboard-general.component.css']
})
export class DashboardGeneralComponent implements OnInit {

  public listaProductos:any = []
  public listaCategorias:any = []
  public listaTallas:any = []
  public TotalVenta:any = []

  public titulo:String =""

  public TotalProductosvendidos: number=0;
  public i: number=0;

  lista:number[]=[1998,2000,2010, 2011];
  

  public high=Math.round(this.getRandomArbitrary(7,8));
  public width=Math.round(this.getRandomArbitrary(7,8))
  public image:string | undefined;
  public seleccionado:number=0

  constructor(private RestService:RestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.image="https://picsum.photos/"+this.width+"/"+this.high+""
    let year = this.route.snapshot.paramMap.get("year"); 
    this.cargarProductosYear(Number(year));
    this.cargarCategoriaYear(Number(year));
    this.cargarTallaYear(Number(year));
    this.cargarTotalVenta(Number(year));
    this.modoificarCantidad();
    
    this.titulo = "Fecha "+   year
  }

  public cargarProductosYear(year:number){    
    this.RestService.get('http://localhost:8080/compra/ventas/productos?year='+year)
    .subscribe((respuesta:any)=>{
      this.listaProductos = respuesta
      console.log(this.listaProductos)
    })
  }

  public cargarCategoriaYear(year:number){    
    this.RestService.get('http://localhost:8080/compra/ventas/categorias?year='+year)
    .subscribe((respuesta:any)=>{
      this.listaCategorias = respuesta
      for(let categoria of respuesta){
        this.TotalProductosvendidos = this.TotalProductosvendidos + categoria.cantidad
        console.log(categoria.cantidad)
      }
      console.log("Total "+this.TotalProductosvendidos)
      console.log(this.listaCategorias)
    })
  }
  

  public cargarTotalVenta(year:number){    
    this.RestService.get('http://localhost:8080/compra/ventas?year='+year)
    .subscribe((respuesta:any)=>{
      this.TotalVenta = respuesta
      console.log(this.TotalVenta)
    })
  }

  public cargarTallaYear(year:number){    
    this.RestService.get('http://localhost:8080/compra/ventas/tallas?year='+year)
    .subscribe((respuesta:any)=>{
      this.listaTallas = respuesta
      console.log(this.listaTallas)
    })
  }
  public getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  modoificarCantidad(){
    for(let categoria of this.listaCategorias){
      this.TotalProductosvendidos = categoria.cantidad;
      console.log("Cantidad"+categoria.cantidad)
    }  
  }
}
