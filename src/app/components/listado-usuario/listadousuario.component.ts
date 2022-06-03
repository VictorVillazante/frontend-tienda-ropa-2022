import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/Usuario';
import { User } from '../../models/User';
@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listadousuario.component.html',
  styleUrls: ['./listadousuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit{
  pagina:number=0;
  max:any;
  usuarios:any[] | undefined;
  constructor(private service:UsuarioService,private router: Router) {
      console.log("Clase listado usuarios component");
      this.obtenerListadoUsuarios();
  }
  ngOnInit(): void {
    this.obtenerListadoUsuarios();
  }
  verMas(id:number){
    this.router.navigate(['menuprincipal/gestionusuario',id]);
  }
  obtenerListadoUsuarios() {
    console.log("Obtener listado usuarios todos");
    this.service.getUsuariosTodos(this.pagina).subscribe((data:any)=>{
      this.usuarios=data.content;
      this.max=data.totalPages-1;
      console.log(this.usuarios);
      if(this.usuarios?.length==0){
        window.alert("No se encontraron usuarios");
      }
    })
  }  
}

