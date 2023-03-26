import { Component ,OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit ,OnChanges{
books!:any[];
searchedBooks!:any[];
  constructor(private bookService: BookService){
    this.bookService.getBooks().subscribe((book) => {
      this.books = book;
      this.searchedBooks = book;
    });
  }
  ngOnInit() {}
  ngOnChanges() {}

  filterBooks(data:HTMLInputElement){
    this.searchedBooks=this.books;
    if(data.value.length>0){
      this.searchedBooks=this.searchedBooks.filter((book)=> book.Name.toLowerCase().match(data.value.toLowerCase()));
  }
  }
}
