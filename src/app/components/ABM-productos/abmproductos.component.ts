import { Component , OnInit} from '@angular/core';
//import { ViajesService, Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { ServiceProductoService } from 'src/app/services/service-producto.service';
import { ServiceAdm } from 'src/app/services/service-adm.service';
import { Producto } from '../../models/Producto';
import { Categoria } from 'src/app/models/Categoria';
import { FormBuilder, FormGroup } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-abm-productos',
  templateUrl: './abmproductos.component.html', 
  styleUrls: ['./abmproductos.component.css'],
  providers: [ServiceAdm]
})
export class ABMproductosComponent implements OnInit{
  nombre!: string;
  categoriaForm!:FormGroup;
  //categorias: Categoria[] | undefined;
  productoBuscado: Producto = {idProducto:null,nombre:"...",precio:0,descripcion:"Producto no encontrado",idCategoria:1,disponibilidad:0,descuento:0};
  seleccionados:number[]=[];
  stock:number=0;
  categorias = [
    { idCategoria: 1, nombre: "United States" },
    { idCategoria: 2, nombre: "Australia" },
    { idCategoria: 3, nombre: "Canada" },
  ];
  categoriaSeleccionada: Categoria = {idCategoria:0,nombre:"categoria_seleccionada"};
  constructor(private activatedRoute:ActivatedRoute,private modalService: NgbModal,private fb:FormBuilder,private service_categoria:ServiceAdm,private service: ServiceProductoService,private router: Router) {
    console.log("Clase ABMproductosComponent");
    this.service_categoria.getCategorias().subscribe(data=>{
      this.categorias=data;
      console.log(this.categorias);
    })
    this.categoriaForm = this.fb.group({
      categoria:[null]
    });
    this.activatedRoute.params.subscribe( params => {
      if(params['nombre']===null || params['nombre']===undefined || typeof params['nombre'] === 'undefined'){
        this.nombre="...";
        this.productoBuscado = {idProducto:null,nombre:"...",precio:0,descripcion:"Producto no encontrado",idCategoria:1,disponibilidad:0,descuento:0};
      }else{
        this.nombre = params['nombre'];
      }
      console.log("parametro");
      console.log(params['nombre']);
      console.log(this.nombre);
      this.buscarProductoPorID();
    });

}
  ngOnInit(): void {
    this.service_categoria.getCategorias().subscribe(data=>{
      this.categorias=data;
    })
    this.categoriaForm = this.fb.group({
      categoria:[null]
    });
    
    
  }
  buscarProductoPorID(){
    console.log("El nombre ha buscar es:"+this.nombre);
    this.service.buscarProductoPorID(this.nombre).subscribe(data=>{
      console.log(data[0]);
      if(data[0]===null || data[0]===undefined || typeof data[0] === 'undefined'){
        this.nombre="...";
        this.productoBuscado = {idProducto:null,nombre:"...",precio:0,descripcion:"Producto no encontrado",idCategoria:1,disponibilidad:0,descuento:0};
      }else{
        this.productoBuscado=data[0]
        this.nombre = this.productoBuscado.nombre;
      }
    })
  }
  closeResult = '';
  nueva_categoria!:string;
  categoria:Categoria={idCategoria:null,nombre:this.closeResult};
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = result;
      console.log(this.closeResult);
      this.categoria.nombre=this.closeResult;
      this.service_categoria.agregarCategoria(this.categoria).subscribe(data=>{
        console.log("Se agrego la categoria");
        console.log(data);
        this.router.navigate(['abmproductos']);
      });
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  agregarProducto(){
    console.log("Agregar producto");
    if(this.productoBuscado.nombre!="" && this.productoBuscado.precio>=0){
      this.productoBuscado.idProducto=null;
      console.log(this.productoBuscado);
      if(this.productoBuscado.precio<1){
        this.productoBuscado.precio=1;
      }
      this.service.agregarProducto(this.productoBuscado).subscribe(data=>{
        alert("Se agrego el producto");
        this.router.navigate(['abmproductos']);
      })  
    }  
  }
  actualizarProducto(){
    console.log("Actualizar producto");
    console.log(this.productoBuscado);
    if(this.productoBuscado.precio<1){
      this.productoBuscado.precio=1;
    }
    this.service.actualizarProducto(this.productoBuscado.idProducto,this.productoBuscado).subscribe(data=>{
      alert("Producto actualizado");
      console.log("mandado a service");
      
    })
  }
  eliminarProducto(){
    console.log("Eliminar producto");
    if(this.productoBuscado.precio<1){
      this.productoBuscado.precio=1;
    }
    console.log(JSON.stringify(this.productoBuscado));
    this.service.eliminarProducto(this.productoBuscado).subscribe(data=>{
      alert("Producto borrado");
    })
  }
  volverABMProductos(){
    this.router.navigate(["menuprincipal/abmproductos"]);
  }
}
