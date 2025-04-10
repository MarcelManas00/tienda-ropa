import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [NavbarComponent, RouterLink, NgFor, NgIf, CommonModule, RouterModule],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.scss'
})
export class ArticulosComponent implements OnInit {
  articulos: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getArticulos().subscribe((data) => {
      this.articulos = data;
    });
  }
}
