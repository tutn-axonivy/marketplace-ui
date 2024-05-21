import {
  HttpClientTestingModule,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { Observable, Subscription, of } from 'rxjs';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../../shared/models/product.model';

const mockProduct = {
  id: 'adobe-acrobat-connector',
  name: 'product name',
  description: 'product description',
};

let router = {
  navigate: jasmine.createSpy('navigate'),
};

describe('ProductComponent', () => {
  let component: ProductComponent;
  let service: ProductService;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    const productServiceStub = {
      getAllProducts: of([mockProduct]),
    };
    console.log(productServiceStub);
    await TestBed.configureTestingModule({
      imports: [ProductComponent],
      providers: [
        {
          provide: Router,
          useValue: router,
        },
        ProductService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductComponent);
    service = TestBed.inject(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should set list of products', fakeAsync(() => {
    spyOn(service, 'getAllProducts').and.returnValue(of([mockProduct]));
    component.ngOnInit();
    expect(component.ngOnInit).toBeTruthy();
  }));

  it('viewProductDetail should navigate', () => {
    component.viewProductDetail('url');
    expect(component.viewProductDetail).toBeTruthy();
  });

  it('ngOnDestroy should unsubscribe all sub', () => {
    const sub = new Subscription();
    component.subscription.push(sub);
    component.ngOnDestroy();
    expect(component.ngOnDestroy).toBeTruthy();
  });
});
