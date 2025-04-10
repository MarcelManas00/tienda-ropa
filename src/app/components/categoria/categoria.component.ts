import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ArticulosComponent } from '../articulos/articulos.component';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [ArticulosComponent],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  categoriaId: string | null = null;
  articulos: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoriaId = params.get('id');
      if (this.categoriaId) {
        this.apiService.getArticulosPorCategoria(this.categoriaId).subscribe((data) => {
          this.articulos = data;
        });
      }
    });
  }

}
