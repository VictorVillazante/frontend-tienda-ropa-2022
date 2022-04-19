import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
@Component({
  selector: 'app-create-account-user',
  templateUrl: './create-account-user.component.html',
  styleUrls: ['./create-account-user.component.css']
})
export class CreateAccountUserComponent implements OnInit {
  usuarioNuevo:Usuario={id_usuario:null,nombre:"",apellido:"",email:"",password:""};

  constructor() { }

  ngOnInit(): void {
  }
  registrarNuevoUsuario(){
    if(this.usuarioNuevo.nombre!="" && this.usuarioNuevo.apellido!="" && this.usuarioNuevo.email!="" && this.usuarioNuevo.password!=""){
      window.alert("Usuario registrado correctamente");
    }else{
      window.alert("No deje los campos vacios");
    }
  }

}
