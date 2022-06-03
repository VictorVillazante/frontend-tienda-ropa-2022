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
  actualizarDatosUsuario(usuario:User){
    console.log("Actualizar usuario service");
    console.log(usuario);
    return this.http.put("http://localhost:8080/usuarios/usuario/"+usuario.idUsuario,usuario,{responseType:'text'});
  }
  getUsuariosTodos(pagina:number){
    return this.http.get<User[]>("http://localhost:8080/usuarios/todos?page="+pagina+"&size=10");
  }
  getComentariosUsuario(id:number){
    console.log("obtener comentarios del usuario");
    return this.http.get<Object[]>("http://localhost:8080/usuarios/comentarios/usuario/"+id);
  }
  putComentarioUsuario(comentario:any,estado:number){
    console.log("Actualizar comentario service");
    console.log(comentario);
    return this.http.put("http://localhost:8080/usuarios/comentario",{
      "idComentarios":comentario[0],
      "contenido":comentario[1],
      "fecha":comentario[2],
      "usuario_id_usuario":comentario[3],
      "producto_id_producto":comentario[4],
      "estado_comentario":0
    },{responseType:'text'});

  }
  habilitarComentario(id:any){
    console.log("Habilitar comentario");
    console.log(id);
    return this.http.put("http://localhost:8080/usuarios/comentario/habilitar/"+id,{},{responseType:'text'});
  }
  deshabilitarComentario(id:any){
    console.log("Habilitar comentario");
    console.log(id);
    return this.http.put("http://localhost:8080/usuarios/comentario/deshabilitar/"+id,{},{responseType:'text'});
  }
}
