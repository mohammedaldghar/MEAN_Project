import { Component } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-all',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllComponent {
  allBooks!:any[]
  constructor(private userserv:UserService) {
    this.userserv.getAllBooks('aaa').subscribe((book)=>{
      book.forEach(element => {
        element.star=Array(element.Rating).fill(0);
        element.unstar=Array(5-element.Rating).fill(0);
      });
      this.allBooks = book;
    })
  }

  categories = [
    { name: 'Olever Twes', author: 'Charles Dickens', avg_rate: 4, rating: 3, Status: 'read' },
    { name: 'Pinocchio ', author: 'Maria', avg_rate: 4, rating: 3, Status: 'Reading' },
    { name: 'The Bible', author: 'Moses', avg_rate: 4, rating: 3, Status: 'Want To Read ' },
    { name: 'The Magic Tree', author: 'Mary Pope Osborne', avg_rate: 4, rating: 3, Status: 'Readding ' },
    { name: 'Winter Fairy', author: 'Lola Karns', avg_rate: 4, rating: 3, Status: 'Read ' }

  ];
  
  stars = Array(this.categories[0].avg_rate).fill(0);
  unstars = Array(5 - this.categories[0].avg_rate).fill(0);

  title = 'UserAfterLogin';





}
