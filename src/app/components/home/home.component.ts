import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { TarjetasComponent } from '../tarjet/tarjet.component';
import { CategoriasComponent } from '../categorias/categorias.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [NavbarComponent, CarouselComponent, TarjetasComponent, CategoriasComponent]
})
export class HomeComponent {

}
