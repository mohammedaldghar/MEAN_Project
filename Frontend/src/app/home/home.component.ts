import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthorService } from '../services/author.service';
import { CategoriesService } from '../services/categories.service';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors!:any[];
  categories!:any[];
  books!:any[];
  popularBooks!:any[];
  constructor(private router:Router,private authorService:AuthorService,
    private categoriesService:CategoriesService,private bookService:BookService){
    this.authorService.getAuthors().subscribe((author) => {
      this.authors = author;
    });
    this.categoriesService.getAllCategories().subscribe((category) => {
      this.categories = category;
    });
    this.bookService.getBooks().subscribe((book) => {
      this.books = book;
    });
    this.bookService.getPopularBooks().subscribe((book) => {
      this.popularBooks = book;
    });
  }
ngOnInit():void{}

}
