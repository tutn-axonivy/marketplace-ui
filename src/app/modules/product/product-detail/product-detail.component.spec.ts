import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { ProductDetailComponent } from './product-detail.component';

class MockProductService {
  getProductById() {
    return of(mockProduct);
  }
}

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
      imports: [HttpClientTestingModule],
      providers: [
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

  it('should create', fakeAsync(() => {
    const spy = spyOn(service, 'getProductById').and.returnValue(
      of(mockProduct)
    );

    // mockService.getProductById.and.returnValue(of(mockProduct));
    // expect(service.getProductById).toHaveBeenCalled();
    expect(component).toBeTruthy();
    expect(spy).toHaveBeenCalled();
    tick();
  }));
});
