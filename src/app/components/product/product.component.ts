import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  apiUrl = "https://localhost:44314/api/products/getall";
  
  // yukarıda import ettiğimiz HttpClient ı constructor da inject ediyoruz. 
  //buradan inject ettiğimiz class sayfada tanımlı olmuş olur ve istediğimiz yerde this ile çağırıp kullanırız.
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log("init çalıştı");
    this.getProducts();
  }

  getProducts() {
    //fonksiyonlarda class içindeki bir parametreyi çağırırken this i kullanırız.
    this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.products=response.data
       });
  }
}
