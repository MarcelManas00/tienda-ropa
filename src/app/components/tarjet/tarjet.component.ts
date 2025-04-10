import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjet.component.html',
  standalone: true,
  imports: [NgFor]
})
export class TarjetasComponent implements OnInit {
  banners: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getBanners().subscribe((data) => {
      this.banners = data;
    });
  }
}
