import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { ABMproductosComponent } from './components/ABM-productos/abmproductos.component'
import { DescripcionProductosComponent} from './components/descripcion-productos/descripcionproductos.component';
import { MenuPrincipalComponent } from './components/menu-principal/menuprincipal.component';
import { ProductosTiendaComponent } from './components/productos-tienda/productostienda.component';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './components/side-bar/sidebar.component';
import { NavBarComponent } from './components/nav-bar/navbar.component';
import { GestionUsuarioComponent } from './components/gestion-usuario/gestionusuario.component';
import { ListadoUsuarioComponent } from './components/listado-usuario/listadousuario.component';
import { CategoriaComponent } from './components/categorias/categorias.component';
//Servicios
import { ServiceAdm } from './services/service-adm.service';
import { ServiceProductoService } from './services/service-producto.service';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsUserComponent } from './components/cards-user/cards-user.component';
import { FooterUserComponent } from './components/footer-user/footer-user.component';
import { ListCarritoUserComponent } from './components/list-carrito-user/list-carrito-user.component';
import { NavigationMenuUserComponent } from './components/navigation-menu-user/navigation-menu-user.component';
import { PrincipalUserComponent } from './components/principal-user/principal-user.component';
import { ProductDetailsUserComponent } from './components/product-details-user/product-details-user.component';
import { ComponentesMenuPrincipalComponent } from './components/componentes-menu-principal/componentes-menu-principal.component';
@NgModule({
  declarations: [
    AppComponent,
    ABMproductosComponent,
    DescripcionProductosComponent,
    MenuPrincipalComponent,
    ProductosTiendaComponent,
    NavBarComponent,
    SideBarComponent,
    GestionUsuarioComponent,
    ListadoUsuarioComponent,
    CategoriaComponent,
    CardsUserComponent,
    FooterUserComponent,
    ListCarritoUserComponent,
    NavigationMenuUserComponent,
    PrincipalUserComponent,
    ProductDetailsUserComponent,
    ComponentesMenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgbModule
  ],
  providers: [ServiceAdm,ServiceProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
