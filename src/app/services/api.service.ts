import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/images`);
  }

  getBanners(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/banners`);
  }

  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categorias`);
  }

  getArticulos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/articulos`);
  }

  getArticulosPorCategoria(categoriaId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/articulos?categoria=${categoriaId}`);
  }

  getArticulo(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/articulos/${id}`);
  }
}