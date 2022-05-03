import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { ServiceProductoService } from '../../services/service-producto.service';
import { Producto } from 'src/app/models/Producto';
import { HelperService } from '../../services/helper.service';
import { ProductosSinStock } from 'src/app/models/ProductosSinStock';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit{
  cantss:String="0";
  productos:Producto[] | undefined;
  productosSinStock:ProductosSinStock[]=[];

  constructor(private helper: HelperService) {
  }
  rootVar:number=0;
  ngOnInit(): void {
    this.helper.customMessage.subscribe(msg => this.cantss = msg);
    this.helper.customObjetosSinStock.subscribe(psstock=>this.productosSinStock=psstock);
  }
    
}
