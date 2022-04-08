import { RouterModule, Routes } from '@angular/router';
import { ABMproductosComponent } from './components/ABM-productos/abmproductos.component';
import { DescripcionProductosComponent} from './components/descripcion-productos/descripcionproductos.component';
import { MenuPrincipalComponent } from './components/menu-principal/menuprincipal.component';
import { ProductosTiendaComponent } from './components/productos-tienda/productostienda.component';
const APP_ROUTES: Routes = [
    { path: 'abmproductos', component: ABMproductosComponent },
    { path: 'descripcionproductos', component: DescripcionProductosComponent },
    { path: 'menuprincipal', component: MenuPrincipalComponent },
    { path: 'productostienda', component: ProductosTiendaComponent },
    { path: 'abmproductos', component: ABMproductosComponent },
    { path: 'abmproductos/:nombre', component: ABMproductosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'menuprincipal'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});

