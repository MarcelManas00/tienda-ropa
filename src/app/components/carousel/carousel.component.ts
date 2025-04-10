import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: 'carousel.component.scss',
  standalone: true,
  imports: [NgFor]
})
export class CarouselComponent implements OnInit {
  images: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getImages().subscribe((data) => {
      this.images = data; console.log(this.images)
    });
  }

  getImageUrl(filename: string): string {
    return `http://localhost:3000/${filename}`;
  }
  
}
