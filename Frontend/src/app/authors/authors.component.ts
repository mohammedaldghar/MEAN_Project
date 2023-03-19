import { Component ,OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { AuthorService } from '../services/author.service';
@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit  ,OnChanges{
  authors!:any[];
  constructor(private authorService:AuthorService){
    this.authorService.getAuthors().subscribe((author) => {
      this.authors = author;
    });
  }
  
  ngOnChanges() {}
  ngOnInit() {}
}
