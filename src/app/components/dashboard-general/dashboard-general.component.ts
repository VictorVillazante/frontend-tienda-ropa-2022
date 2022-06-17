import { RestService } from './../../services/rest.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


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
  public Years:any = []


  public datos:any=[]
  public nombreCategorias: any=[]

  public titulo:String =""

  public TotalProductosvendidos: number=0;
  public i: number=0;

  public lista:number[]=[];
  

  public high=Math.round(this.getRandomArbitrary(7,8));
  public width=Math.round(this.getRandomArbitrary(7,8))
  public image:string | undefined;
  public seleccionado:number=0



  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },

    }
  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: this.nombreCategorias,
    datasets: [
      { data: this.datos, label: '1992'},
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: this.nombreCategorias,
    datasets: [ {
      data: this.datos
    } ]
  };
  public pieChartType: ChartType = 'pie';
  constructor(private RestService:RestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.image="https://picsum.photos/"+this.width+"/"+this.high+""
    let year = this.route.snapshot.paramMap.get("year"); 
    this.cargarProductosYear(Number(year));
    this.cargarCategoriaYear(Number(year));
    this.cargarTallaYear(Number(year));
    this.cargarTotalVenta(Number(year));
    this.cargarYear();
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
      for(let categoria of respuesta){
        this.datos.push(((categoria.cantidad/this.TotalProductosvendidos)*100).toFixed(1))
        this.nombreCategorias.push(categoria.nombre)


      }

      console.log("Total "+this.TotalProductosvendidos)
      console.log(this.listaCategorias)

      console.log(this.datos)
      console.log(this.nombreCategorias)
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

  public cargarYear(){    
    this.RestService.get('http://localhost:8080/compra/ventas/years')
    .subscribe((respuesta:any)=>{
      this.Years = respuesta
      console.log("Los años "+this.Years)
      for(let year of respuesta){
        this.lista.push(year.year)
      }

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
