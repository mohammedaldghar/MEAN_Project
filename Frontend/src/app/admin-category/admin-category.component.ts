import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent {

  admin_categories!: any[];

  constructor(private _CategoriesService: CategoriesService) {
    this._CategoriesService.getAllCategories().subscribe((category) => {
      this.admin_categories = category;
    });
  }

}
