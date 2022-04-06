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
  productoBuscado: Producto = {idProducto:null,nombre:"prod",precio:20,descripcion:"descripcion prod",idCategoria:1};
  seleccionados:number[]=[];
  categorias = [
    { idCategoria: 1, nombre: "United States" },
    { idCategoria: 2, nombre: "Australia" },
    { idCategoria: 3, nombre: "Canada" },
  ];
  categoriaSeleccionada: Categoria = {idCategoria:0,nombre:"categoria_seleccionada"};
  constructor(private modalService: NgbModal,private fb:FormBuilder,private service_categoria:ServiceAdm,private service: ServiceProductoService,private router: Router) {
      console.log("Clase ABMproductosComponent");
      this.service_categoria.getCategorias().subscribe(data=>{
        this.categorias=data;
        console.log(this.categorias);
      })
      this.categoriaForm = this.fb.group({
        categoria:[null]
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
      this.productoBuscado=data[0];
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
        alert("Se agrego la categoria");
        this.router.navigate(['abmproductos']);
      })
      this.service_categoria.getCategorias().subscribe(data=>{
        this.categorias=data;
        console.log(this.categorias);
      })
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
    this.productoBuscado.idProducto=null;
    console.log(this.productoBuscado);
    this.service.agregarProducto(this.productoBuscado).subscribe(data=>{
      alert("Se agrego el producto");
      this.router.navigate(['abmproductos']);
    })    
  }
}
