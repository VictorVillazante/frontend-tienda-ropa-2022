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
import { VentasProductosComponent } from './components/ventas-productos/ventas-productos.component';
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
import { AccountUserComponent } from './components/account-user/account-user.component';
import { CreateAccountUserComponent } from './components/create-account-user/create-account-user.component';
import { HelperService } from './services/helper.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsUserComponent } from './components/products-user/products-user.component';
import { ListCategoriesUserComponent } from './components/list-categories-user/list-categories-user.component';
import { ProductosCategoriaComponent } from './components/productos-categoria/productos-categoria.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { PerfilUsuarioDatosComponent } from './components/perfil-usuario-datos/perfil-usuario-datos.component';
import { UsuarioListadoComprasComponent } from './components/usuario-listado-compras/usuario-listado-compras.component';
import { UsuarioService } from './services/usuario.service';
import { DashboardGeneralComponent } from './components/dashboard-general/dashboard-general.component';
import { DashboardCategoriaComponent } from './components/dashboard-categoria/dashboard-categoria.component';
import { CompraUserComponent } from './components/compra-user/compra-user.component';
import { NgChartsModule } from 'ng2-charts';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';

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
    ComponentesMenuPrincipalComponent,
    AccountUserComponent,
    CreateAccountUserComponent,
    VentasProductosComponent,
    ProductsUserComponent,
    ListCategoriesUserComponent,
    ProductosCategoriaComponent,
    PerfilUsuarioComponent,
    PerfilUsuarioDatosComponent,
    UsuarioListadoComprasComponent,
    DashboardGeneralComponent,
    DashboardCategoriaComponent,
    CompraUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatFormFieldModule,
    MatInputModule,
    NgChartsModule,
    AuthModule.forRoot({
      "domain": "dev-nho7-aet.us.auth0.com",
      "clientId": "Sy7rYlqNq32bI7YWMg8MUaEiZkrDS29X"
    }),
  ],
  providers: [ServiceAdm,ServiceProductoService,HelperService,UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
