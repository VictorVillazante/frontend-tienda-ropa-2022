import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { HelperService } from "../../services/helper.service";
import { ServiceProductoService } from 'src/app/services/service-producto.service';

@Component({
  selector: 'componentesmenuprincipal',
  templateUrl: './componentes-menu-principal.component.html',
  styleUrls: ['./componentes-menu-principal.component.css']
})
export class ComponentesMenuPrincipalComponent implements OnInit {
  cantidad: string="0";

  constructor(private helper: HelperService,private service:ServiceProductoService) { }

  ngOnInit(): void {
    this.buscarProductosSinStock();
    this.helper.customMessage.subscribe(msg => this.cantidad = msg);
  }
  buscarProductosSinStock(){
    this.service.getProductosPocoStock().subscribe(data=>{
      console.log(data);
      this.cantidad=data.length+"";
      this.helper.changeMessage(this.cantidad);
      this.helper.changeObjetosSinStock(data);
    })
  }
  
}
