import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// httpclient üzerinden request atabilmek için app module eklememiz gerekiyor.
// angular cli ile eklediklerimiz otomatik olarak ekleniyor fakat 3rd olarak eklediğimiz kütüphaneleri manuel ekliyoruz.
import { HttpClientModule } from '@angular/common/http';
//html form taglarda ngModel kullanmak için FormsModule import ediyoruz.
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })// forroot modülü tüm projede kullanmayı ifade eder.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
