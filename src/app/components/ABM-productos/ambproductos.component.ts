import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-abm-productos',
  templateUrl: './abmproductos.component.html',
  styleUrls: ['./abmproductos.component.css']
})
export class ABMproductosComponent implements OnInit{
  constructor(private router: Router) {
      console.log("Clase ABMproductosComponent")
  }
  ngOnInit(): void {
  }
}
