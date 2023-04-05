import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { CategoriesComponent } from './categories/categories.component';
import { SpecificCategoryComponent } from './specific-category/specific-category.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { SpecificAuthorComponent } from './specific-author/specific-author.component';
import { SpecificBookComponent } from './specific-book/specific-book.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AllComponent } from './all-books/all-books.component';
import { Curntlty_readingComponent } from './currently-reading-books/currently-reading-books.component';
import { ReadComponent } from './reading-books/reading-books.component';
import { Want_to_readComponent } from './want-to-read-books/want-to-read-books.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { AdminAuthersComponent } from './admin-authers/admin-authers.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:id', component: SpecificCategoryComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'authors/:id', component: SpecificAuthorComponent },
  { path: 'books/:id', component: SpecificBookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin-category', canActivate: [AuthGuard], component: AdminCategoryComponent },
  { path: 'admin-books', canActivate: [AuthGuard], component: AdminBooksComponent },
  { path: 'admin-authors', canActivate: [AuthGuard], component:AdminAuthersComponent},
  { path: 'admin',  component: AdminLoginComponent},
  { path: 'all', canActivate: [AuthGuard], component: AllComponent },
  { path: 'read', canActivate: [AuthGuard], component: ReadComponent },
  { path: 'current', canActivate: [AuthGuard], component: Curntlty_readingComponent },
  { path: 'wantToRead', canActivate: [AuthGuard], component: Want_to_readComponent },
  { path: 'about', component: AboutusComponent},
  { path: 'terms', component: TermsComponent},
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
