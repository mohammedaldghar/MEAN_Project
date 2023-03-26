import { Component ,OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { AuthorService } from '../services/author.service';
@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit  ,OnChanges{
  authors!:any[];
  searchedAuthors!:any[];
  constructor(private authorService:AuthorService){
    this.authorService.getAuthors().subscribe((author) => {
      this.authors = author;
      this.searchedAuthors = author;
    });
  }
  filterAuthors(data:HTMLInputElement){
    this.searchedAuthors=this.authors;
    if(data.value.length>0){
      this.searchedAuthors=this.searchedAuthors.filter(author=>author.firstName.toLowerCase().match(data.value.toLowerCase())||author.lastName.toLowerCase().match(data.value.toLowerCase()));
    }
  }
  ngOnChanges() {}
  ngOnInit() {}
}
