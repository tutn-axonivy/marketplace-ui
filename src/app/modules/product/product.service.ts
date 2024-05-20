import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  httpClient = inject(HttpClient);

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('api/products');
  }

  getProductById(productId: string): Observable<Product> {
    return this.httpClient.get<Product>(`api/products/${productId}`);
  }
}
