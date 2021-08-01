import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded=false;
  filterText="";
  
  // yukarıda import ettiğimiz HttpClient ı constructor da inject ediyoruz. 
  //buradan inject ettiğimiz class sayfada tanımlı olmuş olur ve istediğimiz yerde this ile çağırıp kullanırız.
  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {
    console.log("init çalıştı");
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"]);
      }else{
        this.getProducts();
      }
    });
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
  getProductsByCategory(categoryId:number) {
  
   this.productService.getProductsByCategory(categoryId).subscribe(response=>{
     this.products=response.data
     this.dataLoaded=true;
   });
  }
  addToCart(product:Product)
  {
    if(product.productId===1)
    {

    this.toastrService.error("Bu ürün sepete eklenemez.",product.productName);
    }else{
      this.cartService.addToCart(product);
      this.toastrService.success("Sepete eklendi.",product.productName);
    }
  }
  
}
