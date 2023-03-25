import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthorService } from '../author.service';
import { CategoriesService } from '../categories.service';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors!:any[];
  categories!:any[];
  books!:any[];
  constructor(private router:Router,private authorService:AuthorService,
    private categoriesService:CategoriesService,private bookService:BooksService){
    this.authorService.getAuthors().subscribe((author) => {
      this.authors = author;
    });
    this.categoriesService.getAllCategories().subscribe((category) => {
      this.categories = category;
    });
    this.bookService.getBooks().subscribe((book) => {
      this.books = book;
    });
  }
ngOnInit():void{}

}
