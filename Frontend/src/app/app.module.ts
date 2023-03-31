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
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AllComponent } from './all-books/all-books.component';
import { ReadComponent } from './reading-books/reading-books.component';
import { Curntlty_readingComponent } from './currently-reading-books/currently-reading-books.component';
import { Want_to_readComponent } from './want-to-read-books/want-to-read-books.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { AdminAuthersComponent } from './admin-authers/admin-authers.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsComponent } from './terms/terms.component';


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
    AllComponent,
    ReadComponent,
    Curntlty_readingComponent,
    Want_to_readComponent,
    AdminLoginComponent,
    AdminBooksComponent,
    AdminAuthersComponent,
    AboutusComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,
    HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
