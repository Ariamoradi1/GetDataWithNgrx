import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get('https://fakestoreapi.com/products?limit=8')
  }

  getUsers () {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
