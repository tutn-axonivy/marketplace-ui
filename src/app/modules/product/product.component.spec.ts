import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { of } from 'rxjs';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

const mockProduct = {
  id: '1',
  name: 'product name',
  description: 'product description',
};

describe('ProductComponent', () => {
  let component: ProductComponent;
  let service: ProductService;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProductComponent, HttpClientTestingModule],
      providers: [ProductService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    service = TestBed.inject(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should get all the product', () => {
    service = TestBed.inject(ProductService);
    spyOn(service, 'getAllProducts').and.returnValue(of([mockProduct]));
    component.ngOnInit();
    expect(component.products.length).toBeDefined();
  });
});
