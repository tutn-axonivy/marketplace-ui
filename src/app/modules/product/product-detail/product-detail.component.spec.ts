import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Product } from '../../../shared/models/product.model';
import { ProductDetailComponent } from './product-detail.component';

let PRODUCT_ID: string | undefined = '1';

const mockProduct = {
  name: 'Product name',
  description: 'Product description',
} as Product;

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: PRODUCT_ID },
            },
          },
        },
        {
          provide: HttpClient,
          useValue: {
            get: () => {
              return of(mockProduct);
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.product.name).toEqual(mockProduct.name);
  });
});
