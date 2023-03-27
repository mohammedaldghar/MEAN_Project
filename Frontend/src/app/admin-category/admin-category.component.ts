import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CategoriesService } from '../services/categories.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms'
import { Category } from '../category';


@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent {

  admin_categories!: any[];
  categoryToUpdate: Category = {
    _id: '',
    id: 0,
    name: '',
    Rating: 0,
    __v:0
  }
  error = '';
  constructor(private _CategoriesService: CategoriesService, private _AuthenticationService: AuthenticationService) {
    this._CategoriesService.getAllCategories().subscribe((category) => {
      this.admin_categories = category;
      
    });
  }

  register(registerForm:any) {
    this._CategoriesService.registerCategory(registerForm.value).subscribe(
      (resp) => {
        console.log("resp")
      },
      (err) => {
        console.log("err");
        
      }
    )
  }

  ondelete(_id: any) {
    this._CategoriesService.deleteCategoryById(_id)
  }
  onEdit(categ: Category) {
    this.categoryToUpdate = categ;
    //console.log(this.categoryToUpdate);
  }
  updateCategory() {
   // console.log(this.categoryToUpdate)
    this._CategoriesService.update(this.categoryToUpdate)
    
  }
}
