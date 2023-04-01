import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-all',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllComponent {
  allBooks!:any[]
  currentlyUser!:any;
  constructor(private userserv:UserService , private authorService:AuthorService) {
    this.currentlyUser=localStorage.getItem('loggedUser');
    this.currentlyUser=JSON.parse(this.currentlyUser);
    this.userserv.getAllBooks(this.currentlyUser._id).subscribe((book)=>{
      book.forEach(element => {
        element.star=Array(element.Rating).fill(0);
        element.unstar=Array(5-element.Rating).fill(0);
        this.authorService.getAuthorById(element.AuthorId).subscribe((author)=>{
          element.AuthorId=author;
        });
      });
      this.allBooks = book;
    })
  }
title = 'UserAfterLogin';
}
