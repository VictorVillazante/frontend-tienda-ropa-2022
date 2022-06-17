import { DashboardCategoriaComponent } from './components/dashboard-categoria/dashboard-categoria.component';
import { DashboardGeneralComponent } from './components/dashboard-general/dashboard-general.component';
import { ProductsUserComponent } from './components/products-user/products-user.component';
import { CreateAccountUserComponent } from './components/create-account-user/create-account-user.component';
import { RouterModule, Routes } from '@angular/router';
import { ABMproductosComponent } from './components/ABM-productos/abmproductos.component';
import { DescripcionProductosComponent} from './components/descripcion-productos/descripcionproductos.component';
import { MenuPrincipalComponent } from './components/menu-principal/menuprincipal.component';
import { ProductosTiendaComponent } from './components/productos-tienda/productostienda.component';
import { GestionUsuarioComponent } from './components/gestion-usuario/gestionusuario.component';
import { ListadoUsuarioComponent } from './components/listado-usuario/listadousuario.component';
import { PrincipalUserComponent } from './components/principal-user/principal-user.component';
import { ProductDetailsUserComponent } from './components/product-details-user/product-details-user.component';
import { ListCarritoUserComponent } from './components/list-carrito-user/list-carrito-user.component';
import { CategoriaComponent } from './components/categorias/categorias.component';
import { ComponentesMenuPrincipalComponent } from './components/componentes-menu-principal/componentes-menu-principal.component';
import { VentasProductosComponent } from './components/ventas-productos/ventas-productos.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { PerfilUsuarioDatosComponent } from './components/perfil-usuario-datos/perfil-usuario-datos.component';
import { UsuarioListadoComprasComponent } from './components/usuario-listado-compras/usuario-listado-compras.component';
import { CompraUserComponent } from './components/compra-user/compra-user.component';
const APP_ROUTES: Routes = [
    { path: 'descripcionproductos', component: DescripcionProductosComponent },
    { path: 'menuprincipal', 
      component: ComponentesMenuPrincipalComponent,
      children:[
        { path: '', component: MenuPrincipalComponent},
        { path: 'menuprincipalopciones', component: MenuPrincipalComponent},
        { path: 'productostienda', component: ProductosTiendaComponent },
        { path: 'abmproductos', component: ABMproductosComponent },
        { path: 'abmproductos/:nombre', component: ABMproductosComponent },
        { path: 'gestionusuario/:id', component: GestionUsuarioComponent},
        { path: 'gestionusuario', component: GestionUsuarioComponent},
        { path: 'listadousuario', component: ListadoUsuarioComponent},
        { path: 'ventasproductos', component: VentasProductosComponent},
        { path: 'categoriaproducto', component: CategoriaComponent},
        {
          path:'dashboard/general/:year',
          component:DashboardGeneralComponent
        },
        {
          path:'dashboard/:categoria/:year',
          component:DashboardCategoriaComponent
        },
      ]
    },
    
    {
        path:'',
        component:PrincipalUserComponent
      },
      {
        path:'products/details/:nombre',
        component:ProductDetailsUserComponent
      },
      {
        path:'products/categories/:categoria',
        component:ProductsUserComponent
      },
      {
        path:'products/search/:nombre',
        component:ProductsUserComponent
      },
      {
        path:'carrito',
        component:ListCarritoUserComponent
      },
      {
        path:'carrito/compra',
        component:CompraUserComponent
      },
      {
        path:'account/register',
        component:CreateAccountUserComponent
      },
      {
        path:'perfil',
        component:PerfilUsuarioComponent
      },
      {
        path:'perfil/datos',
        component:PerfilUsuarioDatosComponent
      },
      {
        path:'perfil/compras',
        component:UsuarioListadoComprasComponent
      },

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});

