import { Component ,OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit ,OnChanges{
books!:any[];
  constructor(private bookService: BookService){
    this.bookService.getBooks().subscribe((book) => {
      this.books = book;
    });
  }
  ngOnInit() {}
  ngOnChanges() {}
}
