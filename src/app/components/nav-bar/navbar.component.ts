import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { ServiceProductoService } from '../../services/service-producto.service';
import { Producto } from 'src/app/models/Producto';
import { HelperService } from '../../services/helper.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit{
  cantss:String="0";
  productos:Producto[] | undefined;

  constructor(private helper: HelperService) {
  }
  rootVar:number=0;
  ngOnInit(): void {
    this.helper.customMessage.subscribe(msg => this.cantss = msg);
  }
  
}
