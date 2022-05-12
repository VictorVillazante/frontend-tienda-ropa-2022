import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-perfil-usuario-datos',
  templateUrl: './perfil-usuario-datos.component.html',
  styleUrls: ['./perfil-usuario-datos.component.css']
})
export class PerfilUsuarioDatosComponent implements OnInit {
  usuarioModificado: Usuario={id_usuario:0,nombre:"...",apellido:"...",email:"example@xyz.com",password:""};
  constructor() { }

  ngOnInit(): void {
  }

}
