import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  dataLoaded=false;
  categories:Category[]=[];

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    console.log("Api Başladı");
    //subscribe sekron olarak datayı çekmeye devam eder. JS asekron olarak devam eder. 
    //fakat subscribe içinde tüm işlemler bitip datalar çekildikten sonra işlem yapabiliriz.  
   this.categoryService.getCategories().subscribe(response=>{
     this.categories=response.data

     this.dataLoaded=true;
     console.log("Api Bitti");
   });
   
   console.log("Method Bitti");
  }
}
