import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { ServiceAdm } from 'src/app/services/service-adm.service';
import { UsuarioService } from '../../services/usuario.service';
@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestionusuario.component.html',
  styleUrls: ['./gestionusuario.component.css']
})
export class GestionUsuarioComponent implements OnInit{
  comentarios:any;
  id!: any;
  usuarioSeleccionado:any = {
    id_usuario:"",
    nombre:"",
    apellido:"",
    email:""
  };
  constructor(private service:ServiceAdm,private router: Router,private activatedRoute:ActivatedRoute,private serviceUsuario:UsuarioService) {
      console.log("Clase ABMproductosComponent");
      this.activatedRoute.params.subscribe( params => {
        if(params['id']===null || params['id']===undefined || typeof params['id'] === 'undefined'){
          this.id="...";
          this.usuarioSeleccionado = {
            id_usuario:"",
            nombre:"",
            apellido:"",
            email:""
          };
        }else{
          this.id = params['id'];
          this.buscarUsuarioPorID();
          this.obtenerComentariosDeUsuario(this.id);
        }
        console.log("parametro");
        console.log(params['id']);
        console.log(this.id);
      });
  }
  obtenerComentariosDeUsuario(id: any) {
    console.log("Buscar comentarios de usuario:"+id);
    this.serviceUsuario.getComentariosUsuario(this.id).subscribe(data=>{
      console.log("obtener comentarios del usuario devolviendo data");
      console.log(data);
      this.comentarios=data;
      if(data===null || data===undefined || typeof data === 'undefined'){
        window.alert("No se encontraron comentarios del usuario seleccionado");
      }else{
      }
    })
  }
  ngOnInit(): void {
  }
  buscarUsuarioPorID(){
    console.log("El usuario ha buscar es:"+this.id);
    this.serviceUsuario.getUsuarios(this.id).subscribe(data=>{
      console.log(data);
      if(data===null || data===undefined || typeof data === 'undefined'){
        this.id="...";
        this.usuarioSeleccionado = {
          id_usuario:"",
          nombre:"",
          apellido:"",
          email:""
        };
      }else{
        this.usuarioSeleccionado=data;
        this.id = this.usuarioSeleccionado.id;
      }
    })
  }
  
}
