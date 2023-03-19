import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { SpecificCategoryComponent } from './specific-category/specific-category.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { SpecificAuthorComponent } from './specific-author/specific-author.component';
import { SpecificBookComponent } from './specific-book/specific-book.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CategoriesComponent,
    SpecificCategoryComponent,
    AuthorsComponent,
    BooksComponent,
    SpecificAuthorComponent,
    SpecificBookComponent,
    NotFoundPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
