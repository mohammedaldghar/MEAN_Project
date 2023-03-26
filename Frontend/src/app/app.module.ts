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
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { ReadingBooksComponent } from './reading-books/reading-books.component';
import { CurrentlyReadingBooksComponent } from './currently-reading-books/currently-reading-books.component';
import { WantToReadBooksComponent } from './want-to-read-books/want-to-read-books.component';


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
    HomeComponent,
    LogoutComponent,
    SignupComponent,
    LoginComponent,
    AdminCategoryComponent,
    AllBooksComponent,
    ReadingBooksComponent,
    CurrentlyReadingBooksComponent,
    WantToReadBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
