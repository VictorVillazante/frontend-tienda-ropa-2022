import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { ServiceProductoService } from 'src/app/service/service-producto.service';
import { Producto } from '../../Model/Producto';
@Component({
  selector: 'app-abm-productos',
  templateUrl: './abmproductos.component.html',
  styleUrls: ['./abmproductos.component.css']
})
export class ABMproductosComponent implements OnInit{
  nombre!: string;
  constructor(private service: ServiceProductoService,private router: Router) {
      console.log("Clase ABMproductosComponent")
  }
  productoBuscado:Producto | undefined;
  ngOnInit(): void {
  }
  buscarProductoPorID(){
    console.log("El nombre ha buscar es:"+this.nombre);
    alert(this.nombre);
    this.service.buscarProductoPorID(this.nombre).subscribe(data=>{
      alert('El producto fue encontrado');
      alert(JSON.stringify(data));
      this.productoBuscado=data;
    })
  }
}
