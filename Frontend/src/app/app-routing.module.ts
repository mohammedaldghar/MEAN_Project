import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { SpecificCategoryComponent } from './specific-category/specific-category.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { SpecificAuthorComponent } from './specific-author/specific-author.component';
import { SpecificBookComponent } from './specific-book/specific-book.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'category/:id',component:SpecificCategoryComponent},
  {path:'authors',component:AuthorsComponent},
  {path:'books',component:BooksComponent},
  {path:'authors/:id',component:SpecificAuthorComponent},
  {path:'books/:id',component:SpecificBookComponent},
  {path:"**",component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
