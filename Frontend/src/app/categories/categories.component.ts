import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit, OnChanges {
  categ!: any[];
  constructor(private categoriesService: CategoriesService) {
    console.log(this.categ)
    this.categoriesService.getAllCategories().subscribe((category) => {
      this.categ = category;
    });
  }
  ngOnChanges() {}
  ngOnInit() {}
}
