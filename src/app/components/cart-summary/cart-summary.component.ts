import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];
  

  constructor(private cartService:CartService,private toastrService:ToastrService,private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    
  this.getCart();
  }

  getCart(){

    
    this.cartItems= this.cartService.list();
    this.persist("cart",this.cartItems);
  }
  removeFromCart(product:Product)
  {
    this.cartService.removeFromCart(product);
    this.toastrService.error("Silindi",product.productName +" sepetten silindi.");
  }
  persist(key: string, value: any) {
    this.localStorageService.set(key, value);
  }
}
