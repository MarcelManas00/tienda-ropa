import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.scss'
})
export class ArticulosComponent {
  @Input() articulos: any[] = [];
}
