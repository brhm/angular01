import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded=false;
  // yukarıda import ettiğimiz HttpClient ı constructor da inject ediyoruz. 
  //buradan inject ettiğimiz class sayfada tanımlı olmuş olur ve istediğimiz yerde this ile çağırıp kullanırız.
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    console.log("init çalıştı");
    this.getProducts();
  }
  getProducts() {
    console.log("Api Başladı");
    //subscribe sekron olarak datayı çekmeye devam eder. JS asekron olarak devam eder. 
    //fakat subscribe içinde tüm işlemler bitip datalar çekildikten sonra işlem yapabiliriz.  
   this.productService.getProducts().subscribe(response=>{
     this.products=response.data

     this.dataLoaded=true;
     console.log("Api Bitti");
   });
   
   console.log("Method Bitti");
  }
  
}
