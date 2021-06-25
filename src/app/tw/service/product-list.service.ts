import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor(private http: HttpClient) {}

  async getData() {
    let result = await this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .toPromise();
    return result;
  }
}
