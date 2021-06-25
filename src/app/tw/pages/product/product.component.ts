import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  role = ['henry', 'john'];
  constructor(public productService: ProductService) {}

  name = this.productService.getName();
  ngOnInit(): void {}
}
