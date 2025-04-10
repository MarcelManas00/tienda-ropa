import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-ficha-articulo',
  templateUrl: './ficha-articulo.component.html',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe]
})
export class FichaArticuloComponent implements OnInit {
  articulo: any | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.apiService.getArticulo(Number(id)).subscribe((data) => {
          this.articulo = data;
        });
      }
    });
  }
}