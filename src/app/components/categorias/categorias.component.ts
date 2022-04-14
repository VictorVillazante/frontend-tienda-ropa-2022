import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { ServiceProductoService } from 'src/app/service/service-producto.service';
import { ServiceAdm } from 'src/app/service/service-adm.service';
import { Producto } from '../../Model/Producto';
import { Categoria } from 'src/app/Model/Categoria';
import { FormBuilder, FormGroup } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html', 
  styleUrls: ['./categorias.component.css'],
  providers: [ServiceAdm]
})
export class CategoriaComponent implements OnInit{
  nombre!: string;
  categoriaForm!:FormGroup;
  //categorias: Categoria[] | undefined;
  categorias = [
    { idCategoria: 1, nombre: "United States" },
    { idCategoria: 2, nombre: "Australia" },
    { idCategoria: 3, nombre: "Canada" },
  ];
  cseleccionada: Categoria = {idCategoria:0,nombre:"categoria_seleccionada"};
  constructor(private activatedRoute:ActivatedRoute,private modalService: NgbModal,private fb:FormBuilder,private service_categoria:ServiceAdm,private service: ServiceProductoService,private router: Router) {
    console.log("Clase ABMproductosComponent");
    this.service_categoria.getCategorias().subscribe(data=>{
      this.categorias=data;
      console.log(this.categorias);
    });
    this.cseleccionada = {idCategoria:0,nombre:"categoria_seleccionada"};
  }
  ngOnInit(): void {
    this.service_categoria.getCategorias().subscribe(data=>{
      this.categorias=data;
    })
    this.cseleccionada = {idCategoria:0,nombre:"categoria_seleccionada"};
  }
  agregarCategoria(){

    this.cseleccionada.idCategoria=0;
  }
}