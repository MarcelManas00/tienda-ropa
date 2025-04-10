import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { FichaArticuloComponent } from './components/ficha-articulo/ficha-articulo.component';
import { ArticulosComponent } from './components/articulos/articulos.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'articulos/:id', component: FichaArticuloComponent }
];