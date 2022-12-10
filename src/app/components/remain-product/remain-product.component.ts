import { Component } from '@angular/core';
import { Product, PRODUCTS } from 'src/app/mocks/products.mocks';

@Component({
  selector: 'app-remain-product',
  templateUrl: './remain-product.component.html',
  styleUrls: ['./remain-product.component.css'],
})
// Je récupère en variable "product" mon mock et son type
export class RemainProductComponent {
  product: Product[] = PRODUCTS;
}
