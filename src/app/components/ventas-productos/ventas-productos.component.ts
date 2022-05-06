import { Component, OnInit } from '@angular/core';
import { VentasAux } from 'src/app/models/VentasAux';
import { VentasService } from '../../services/ventas.service';

@Component({
  selector: 'app-ventas-productos',
  templateUrl: './ventas-productos.component.html',
  styleUrls: ['./ventas-productos.component.css']
})
export class VentasProductosComponent implements OnInit {

  listaVentas:VentasAux[]|undefined;
  constructor(private service:VentasService) { }

  ngOnInit(): void {
    this.obtenerTodasVentas();
  }
  obtenerTodasVentas(){
    this.service.getVentas().subscribe(data=>{
      this.listaVentas=data;
      if(this.listaVentas?.length==0){
        window.alert("No se encontraron ventas");
      }
    })
  }
}
