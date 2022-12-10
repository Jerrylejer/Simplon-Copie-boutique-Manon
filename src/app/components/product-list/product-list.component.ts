import { Component } from '@angular/core';
import { Product, PRODUCTS } from 'src/app/mocks/products.mocks';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
product: Product[] = PRODUCTS;
}
