import { RestService } from './../../services/rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarritoService } from './../../services/carrito.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu-user',
  templateUrl: './navigation-menu-user.component.html',
  styleUrls: ['./navigation-menu-user.component.css']
})
export class NavigationMenuUserComponent implements OnInit {

  public nCarrito:number | undefined;

  public busquedaForm!: FormGroup;

  public resBusqueda:any= []

  constructor(private router: Router,private Carrito:CarritoService, private formBuilde: FormBuilder, private RestService:RestService) { }

  ngOnInit(): void {
    this.nCarrito=this.Carrito.getCache('carrito').length
    this.Carrito.getObs('carrito').subscribe(carrito=>{
      console.log(carrito.length)
      this.nCarrito = carrito.length
    })
    this.busquedaForm = this.formBuilde.group({
      busqueda: ['',Validators.required]
    });

  }

  public Busqueda(){    
    this.RestService.get("http://localhost:8080/productos/buscar?nombre="+this.busquedaForm.value.busqueda)
    .subscribe(respuesta =>{
      this.resBusqueda =respuesta;
      console.log(this.resBusqueda)
    })
  }
  buscarMenuAdministrador(){
    this.router.navigate(['/menuprincipal']);
  }

}
