import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ProductDetails = [{ id: 1, name: 'adidas' }]



  constructor() {}
    getDetails(){
      return this.ProductDetails;

    }
  }


