import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'secound',
  templateUrl: './currently-reading-books.component.html',
  styleUrls: ['./currently-reading-books.component.css']
})
export class Curntlty_readingComponent {

  allBooks!:any[];

  constructor(private  userserv:UserService){

    this.userserv.getCurrentlyBooks('dfagghsr64446s54f6s').subscribe(book=>{
      this. allBooks=book;
        });

  }
  

  categories=[
    {name:'Olever Twes',author:'Charles Dickens',avg_rate:4,rating :3,Status:'read'},
    {name:'Pinocchio ',author:'Maria',avg_rate:4,rating :3,Status:'Reading'},
    {name:'The Bible',author:'Moses',avg_rate:4,rating :3,Status:'Want To Read '},
    {name:'The Magic Tree',author:'Mary Pope Osborne',avg_rate:4,rating :3,Status:'Readding '},
    {name:'Winter Fairy',author:'Lola Karns',avg_rate:4,rating :3,Status:'Read '}

];

stars=Array(this.categories[0].avg_rate).fill(0);
  unstars=Array(5-this.categories[0].avg_rate).fill(0);
  
  title = 'UserAfterLogin';
 }
