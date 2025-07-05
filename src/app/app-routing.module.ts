import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', loadChildren: () => import('./pages/nosotros/nosotros.module').then(m => m.NosotrosModule) },
  { path: 'servicios', loadChildren: () => import('./pages/servicios/servicios.module').then(m => m.ServiciosModule) },
  { path: 'planes', loadChildren: () => import('./pages/planes/planes.module').then(m => m.PlanesModule) },
  { path: 'fundacion', loadChildren: () => import('./pages/fundacion/fundacion.module').then(m => m.FundacionModule) },
  { path: 'boostcast', loadChildren: () => import('./pages/boostcast/boostcast.module').then(m => m.BoostcastModule) },
  { path: 'tienda', loadChildren: () => import('./pages/tienda/tienda.module').then(m => m.TiendaModule) },
  { path: 'contacto', loadChildren: () => import('./pages/contacto/contacto.module').then(m => m.ContactoModule) },
  { path: 'el-futuro-es-ahora', loadChildren: () => import('./pages/futuro/futuro.module').then(m => m.FuturoModule) },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64] // [x, y] - x=0 pixels to the right, y=64 pixels down the page
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
