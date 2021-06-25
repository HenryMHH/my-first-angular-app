import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  public productName = 'henry';

  getName() {
    return this.productName;
  }
}
