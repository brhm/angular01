import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// httpclient üzerinden request atabilmek için app module eklememiz gerekiyor.
// angular cli ile eklediklerimiz otomatik olarak ekleniyor fakat 3rd olarak eklediğimiz kütüphaneleri manuel ekliyoruz.
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
