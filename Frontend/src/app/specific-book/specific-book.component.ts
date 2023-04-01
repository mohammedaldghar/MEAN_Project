import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-specific-book',
  templateUrl: './specific-book.component.html',
  styleUrls: ['./specific-book.component.css']
})
export class SpecificBookComponent implements OnInit,OnChanges{
  book!:any;
  stars!:any;
  unStar!:any;
mycoment: any;
messages=false;
currentUser!:any;
  constructor(private bookService: BookService,private activetedRoute: ActivatedRoute,private router: Router,private location: Location){
    this.activetedRoute.paramMap.subscribe(param=>{
      bookService.getBookByTd(param.get('id')).subscribe(book=>{
        this.book=book;
        this.stars=Array(book[0].Rating).fill(0);
        this.unStar=Array(5-this.stars.length).fill(0);
      });
          });
          this.currentUser=localStorage.getItem('loggedUser');
          this.currentUser=JSON.parse(this.currentUser)
  }
  addWantToReadBook(userId:any, bookId:any){
    //step 1:
    this.bookService.deleteFromCurrentlyReadingList(userId,bookId).subscribe(book=>{
      console.log("Book Deleted from Currently");
    });
    //Step 2:
    this.bookService.deletefromReadList(userId,bookId).subscribe(book=>{
      console.log("Book Deleted from read");
    });
    //Step 3:
    this.bookService.addToWantToReadList(userId,bookId).subscribe(book=>{
      console.log("Book Added Sucessfully");
    });
    this.messages=true;
  }
  addReadBook(userId:any, bookId:any){
    //Step 1:
    this.bookService.deleteFromCurrentlyReadingList(userId,bookId).subscribe(book=>{
      console.log("Book Deleted from Current");
    });
    //Step 2:
    this.bookService.deleteFromWantToReadList(userId,bookId).subscribe(book=>{
      console.log("Book Deleted from want");
    });
    //Step 3:
    this.bookService.addToReadList(userId,bookId).subscribe(book=>{
      console.log("Book Added Successfully");
    });
    this.messages=true;
  }
  addCurrentlyReadingBook(userId:any, bookId:any){
    //Step 1:
    this.bookService.deleteFromWantToReadList(userId,bookId).subscribe(book=>{
      console.log("Deleted From want to read");
    });
    //Step 2:
    this.bookService.deletefromReadList(userId,bookId).subscribe(book=>{
      console.log("Deleted From read");
    });
    //Step 3:
    this.bookService.addToCurrentelyReadingList(userId,bookId).subscribe(book=>{
      console.log("Book Added Successfully");
    });
    this.messages=true;
  }
  deleteBookFromUser(userId:any, bookId:any){
    //Step 1:
    this.bookService.deleteFromCurrentlyReadingList(userId,bookId).subscribe(book=>{
      console.log("Deleted From Current");
    });
    //Step 2:
    this.bookService.deleteFromWantToReadList(userId,bookId).subscribe(book=>{
      console.log("Deleted Fom Want");
    });
    //Step 3:
    this.bookService.deletefromReadList(userId,bookId).subscribe(book=>{
      console.log("Deleted from read");
    });
    console.log("Book Deleted Successfully");
    this.messages=true;
  }
addComment(bookId:any,userId:any,comment:any){
  this.bookService.addComment(bookId,userId,comment.value).subscribe(book=>{
    console.log("Comment Added");
  });
  this.refresh();
}
disappeare():void{
this.messages=false;
}

refresh(): void {
  this.router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
  console.log(decodeURI(this.location.path()));
  this.router.navigate([decodeURI(this.location.path())]);
  });
}

  ngOnInit(){}
  ngOnChanges(){}

}
