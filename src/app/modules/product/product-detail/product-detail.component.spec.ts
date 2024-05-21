import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import {
  HttpClientTestingModule,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { ProductDetailComponent } from './product-detail.component';
import { provideHttpClient } from '@angular/common/http';

const mockProduct = {
  name: 'Product name',
  description: 'Product description',
} as Product;

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let service: ProductService;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: '1' },
            },
          },
        },
        ProductService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    const spy = spyOn(service, 'getProductById').and.returnValue(
      of(mockProduct)
    );
    expect(component).toBeTruthy();
    expect(spy).toHaveBeenCalledWith('1');
  });
});
