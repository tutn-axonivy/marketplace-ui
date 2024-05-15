import { Component } from '@angular/core';
import { ProductComponent } from '../../../modules/product/product.component';
import { ProductService } from '../../../modules/product/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  providers: [ProductService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
