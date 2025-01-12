import { Component ,OnChanges,OnInit} from '@angular/core';
import { AuthorService } from '../services/author.service';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-specific-author',
  templateUrl: './specific-author.component.html',
  styleUrls: ['./specific-author.component.css']
})
export class SpecificAuthorComponent implements OnChanges ,OnInit{
  author!:any;
  books!:any[];
  rating:any=true;
  // star!:any;
  // unstar!:any;
  constructor(private activatedRoute: ActivatedRoute,bookService: BookService,authorService: AuthorService){
this.activatedRoute.paramMap.subscribe(param=>{
authorService.getAuthorById(param.get('id')).subscribe(author=>{
this.author = author;
});
});
this.activatedRoute.paramMap.subscribe(param=>{
  bookService.getBooksByAuthor(param.get('id')).subscribe(book=>{
    book.forEach(element => {
      element.star=Array(element.Rating).fill(0);
      element.unstar=Array(5-element.Rating).fill(0);
    });
    this.books=book
  });
});
  }
  ngOnChanges() {}
  ngOnInit() {}
  changeStar(){
    this.rating=!this.rating;
  }
}
