import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../shared/models/product.model';
import { of } from 'rxjs';

const mockProduct = {
  id: '1',
  name: 'Product Name',
  description: 'Product Description',
} as Product;

describe('ProductService', () => {
  let service: ProductService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllProduct should return list of products', () => {
    spyOn(httpClient, 'get').and.returnValue(of([mockProduct]));
    service.getAllProducts().subscribe((products) => {
      expect(products.length).toEqual(1);
    });
  });

  it('getProductById should return a product', () => {
    spyOn(httpClient, 'get').and.returnValue(of(mockProduct));
    service.getProductById('id').subscribe((product) => {
      expect(product.name).toEqual(mockProduct.name);
    });
  });
});
