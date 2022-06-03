import { Component, OnInit } from '@angular/core';
import { ComprasUsuario } from '../../models/ComprasUsuario';
import { VentasService } from '../../services/ventas.service';

@Component({
  selector: 'app-usuario-listado-compras',
  templateUrl: './usuario-listado-compras.component.html',
  styleUrls: ['./usuario-listado-compras.component.css']
})
export class UsuarioListadoComprasComponent implements OnInit {
  listadoCompras: ComprasUsuario[] = [];
  constructor(private service:VentasService) { 

  }

  ngOnInit(): void {
    this.obtenerComprasUsuario();
  }
  obtenerComprasUsuario(){
    this.service.getVentasUsuarios(2).subscribe((data:any)=>{
      console.log(data);
      this.listadoCompras=data;
    })
    if(this.listadoCompras?.length==0){
      window.alert("No se tiene compras registradas");
    }
  }
}
