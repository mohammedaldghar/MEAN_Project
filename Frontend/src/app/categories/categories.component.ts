import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit, OnChanges {
  categ!: any[];
  searchedCateg!:any[];
  constructor(private categoriesService: CategoriesService) {
    console.log(this.categ)
    this.categoriesService.getAllCategories().subscribe((category) => {
      this.categ = category;
      this.searchedCateg =category;
    });
  }
  
  ngOnChanges() {}
  ngOnInit() {}
  filterCategories(data:HTMLInputElement){
    this.searchedCateg=this.categ;
    if(data.value.length>0){
      this.searchedCateg=this.searchedCateg.filter((category) => category.name.toLowerCase().match(data.value.toLowerCase()));
    }
  }
}
