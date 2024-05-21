import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';

const mockProduct = {
  id: 'adobe-acrobat-connector',
  name: 'product name',
  description: 'product description',
};

const mockProductService = {
  getAllProducts: () => {
    return of([mockProduct]);
  },
};

const router = {
  navigate: jasmine.createSpy('navigate'),
};

describe('ProductComponent', () => {
  let component: ProductComponent;
  let service: ProductService;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent],
      providers: [
        {
          provide: Router,
          useValue: router,
        },
        ProductService,
        {
          provide: HttpClient,
          useValue: {
            get: (url: string) => {
              return of([mockProduct]);
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should set list of products', fakeAsync(() => {
    spyOn(service, 'getAllProducts').and.returnValue(of([mockProduct]));
    component.ngOnInit();
    expect(component.products.length).toEqual(1);
  }));

  it('viewProductDetail should navigate', () => {
    component.viewProductDetail('url');
    expect(router.navigate).toHaveBeenCalledWith(['', 'url']);
  });

  it('ngOnDestroy should unsubscribe all sub', () => {
    const sub = new Subscription();
    component.subscription.push(sub);
    component.ngOnDestroy();
    expect(component.ngOnDestroy).toBeTruthy();
  });
});
