import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthorService } from '../services/author.service';
@Component({
  selector: 'fourth',
  templateUrl: './want-to-read-books.component.html',
  styleUrls: ['./want-to-read-books.component.css']
})
export class Want_to_readComponent {
  allBooks!:any[]
  currentlyUser!:any;
  constructor(private userserv:UserService , private authorService:AuthorService) {
    this.currentlyUser=localStorage.getItem('loggedUser');
    this.currentlyUser=JSON.parse(this.currentlyUser);
    this.userserv.getWantToReadBooks(this.currentlyUser._id).subscribe((book)=>{
      this.allBooks = book;
      this.allBooks.forEach(element=>{
        element.star=Array(element.Rating).fill(0);
        element.unstar=Array(5-element.Rating).fill(0);
        this.authorService.getAuthorById(element.AuthorId).subscribe((author)=>{
          element.AuthorId=author;
      })
    })
  })
}

  title = 'UserAfterLogin';
}
