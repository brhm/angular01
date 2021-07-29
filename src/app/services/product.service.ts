import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  apiUrl = "https://localhost:44314/api/products/getall";
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    //fonksiyonlarda class içindeki bir parametreyi çağırırken this i kullanırız.
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
