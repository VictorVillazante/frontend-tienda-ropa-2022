import { Categoria } from 'src/app/models/Categoria';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from './../../services/rest.service';

@Component({
  selector: 'app-dashboard-categoria',
  templateUrl: './dashboard-categoria.component.html',
  styleUrls: ['./dashboard-categoria.component.css']
})
export class DashboardCategoriaComponent implements OnInit {

  public ListaProductosByCategoryYear:any = []
  public ListaCategorias:any = []

  public high=Math.round(this.getRandomArbitrary(200,210));
  public width=Math.round(this.getRandomArbitrary(200,210));

  public image:string | undefined;

  public titulo:String =""

  lista:number[]=[1998,2000,2010, 2011];
  public seleccionado:number=0

  public categoria:String=""
  public year:number=0

  constructor( private route: ActivatedRoute,private RestService:RestService) { }

  ngOnInit(): void {
    this.image="https://picsum.photos/"+this.width+"/"+this.high+""
    let year = this.route.snapshot.paramMap.get("year"); 
    let categoria = this.route.snapshot.paramMap.get("categoria"); 
    this.titulo = "Productos mas vendidos de la categoria: "+  categoria+" en el año: "+ year
    if(categoria === null){
      categoria = ''
    }
    this.CargarProductoCategoria(Number(year),categoria);
    this.CargarCategorias();
  }

  public CargarProductoCategoria(year:number, categoria:String){    
    this.RestService.get('http://localhost:8080/compra/ventas/categoria?year='+year+'&categoria='+categoria)
    .subscribe((respuesta:any)=>{
      this.ListaProductosByCategoryYear = respuesta
      console.log(this.ListaProductosByCategoryYear)
    })
  }

  public CargarCategorias(){    
    this.RestService.get('http://localhost:8080/categorias/todos')
    .subscribe((respuesta:any)=>{
      this.ListaCategorias = respuesta
      console.log(this.ListaCategorias)
    })
  }
  public getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

}
