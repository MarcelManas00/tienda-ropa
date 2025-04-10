import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
  standalone: true,
  imports: [NgFor, RouterLink]
})
export class CategoriasComponent implements OnInit {
  categorias: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }
}
