import { RestService } from './../../services/rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarritoService } from './../../services/carrito.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-navigation-menu-user',
  templateUrl: './navigation-menu-user.component.html',
  styleUrls: ['./navigation-menu-user.component.css']
})
export class NavigationMenuUserComponent implements OnInit {

  public nCarrito:number | undefined;

  public busquedaForm!: FormGroup;

  public resBusqueda:any= []

  constructor(private router: Router,public auth:AuthService,@Inject(DOCUMENT)private doc:Document,private Carrito:CarritoService, private formBuilde: FormBuilder, private RestService:RestService) { 
    console.log(auth);
  }

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
    //this.router.navigateByUrl('/products/search/'+this.busquedaForm.value.busqueda)
    this.router.navigate(['/', 'products','search',this.busquedaForm.value.busqueda]);
  }
  buscarMenuAdministrador(){
    this.router.navigate(['/menuprincipal']);
  }
  redirigirPerfilUsuario(){
    this.router.navigate(['/perfil']);
  }
  login(){
    this.auth.loginWithRedirect();
  }
  logout(){
    this.auth.logout({returnTo:this.doc.location.origin});
  }
}

