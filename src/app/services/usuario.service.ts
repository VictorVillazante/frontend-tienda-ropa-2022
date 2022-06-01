import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/Categoria';
import { Usuario } from '../models/Usuario';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient){}

  getUsuarios(id:any){
    console.log("Obtener usuario usuario.service "+id);
    console.log(this.http.get<User>("http://localhost:8080/usuarios/usuario/2"));
    return this.http.get<User>("http://localhost:8080/usuarios/usuario/"+id);
  }
}
