import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listadousuario.component.html',
  styleUrls: ['./listadousuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit{
  constructor(private router: Router) {
      console.log("Clase ABMproductosComponent")
  }
  ngOnInit(): void {
  }
  verMas(id:number){
    this.router.navigate(['gestionusuario',id]);
  }
}
