import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { of } from 'rxjs';

const mockProduct = {
  id: '1',
  name: 'product name',
  description: 'product description',
};

describe('ProductComponent', () => {
  let component: ProductComponent;
  let service: ProductService;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent],
      providers: [ProductService],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should get all the product', () => {
    spyOn(service, 'getAllProducts').and.returnValue(of([]));
    component.ngOnInit();
    expect(component.products.length).toEqual(3);
  });
});
