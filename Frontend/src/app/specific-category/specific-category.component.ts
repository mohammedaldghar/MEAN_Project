import { Component, OnChanges, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
@Component({
  selector: 'app-specific-category',
  templateUrl: './specific-category.component.html',
  styleUrls: ['./specific-category.component.css']
})
export class SpecificCategoryComponent implements OnInit, OnChanges{
  books!:any[]
  category!:any
  constructor(private activatedRoute:ActivatedRoute,bookService: BookService,categoryService: CategoriesService){
this.activatedRoute.paramMap.subscribe(params =>{
  bookService.getBooksByCategory(params.get('id')).subscribe(book =>{
    this.books=book;
  });
  this.activatedRoute.paramMap.subscribe(params =>{
    categoryService.getCategoryByTd(params.get('id')).subscribe(category=>{
      this.category=category;
      console.log(category);
    });
  });
});
  }
  ngOnChanges() {}
  ngOnInit() {}
}
