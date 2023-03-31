import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getBooksByCategory(id: any): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/book/categorybook/' + id, { headers: new HttpHeaders().set('Authorization', 'secret token') })
  }
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/book', { headers: new HttpHeaders().set('Authorization', 'secret token') })
  }
  getBooksByAuthor(id: any): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/book/authorbook/' + id, { headers: new HttpHeaders().set('Authorization', 'secret token') })
  }
  getBookByTd(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:5000/book/' + id, { headers: new HttpHeaders().set('Authorization', 'secret token') })
  }

  // addBookToCurrentReadingList(userId:any,bookId:any){
  //   console.log(userId,bookId)
  //   this.http.delete('http://localhost:5000/user/'+userId+'/editWantToReadBook',{body:{'book':bookId}})
  //   this.http.delete('http://localhost:5000/user/'+userId+'/editReadBook',{body:{'book':bookId}})
  //   this.http.post('http://localhost:5000/user/'+userId+'/addCurrentlyReadingBook',{body:{'book':bookId}});
  //   console.log("done"); 
  // }
  // addBookToWantToReadList(userId:any,bookId:any){
  //   this.http.delete('http://localhost:5000/user/'+userId+'/editCurrentlyReadingBook',{body:{'book':bookId}})
  //   this.http.delete('http://localhost:5000/user/'+userId+'/editReadBook',{body:{'book':bookId}})
  //   this.http.post('http://localhost:5000/user/'+userId+'/addWantToReadBook',{body:{'book':bookId}});
  //   console.log("done");
  // }
  // addBookToReadList(userId:any,bookId:any){
  //   this.http.delete('http://localhost:5000/user/'+userId+'/editCurrentlyReadingBook',{body:{'book':bookId}})
  //   this.http.delete('http://localhost:5000/user/'+userId+'/editWantToReadBook',{body:{'book':bookId}})
  //   this.http.post('http://localhost:5000/user/'+userId+'/addReadBook',{body:{'book':bookId}});
  //   console.log("done");
  // }
  // deleteBookFromUser(userId:any,bookId:any){
  //   this.http.delete('http://localhost:5000/user/'+userId+'/editReadBook',{body:{'book':bookId}})
  //   this.http.delete('http://localhost:5000/user/'+userId+'/editWantToReadBook',{body:{'book':bookId}})
  //   this.http.delete('http://localhost:5000/user/'+userId+'/editCurrentlyReadingBook',{body:{'book':bookId}})
  //   // console.log("done");
  // }
  deleteFromCurrentlyReadingList(userId: any, bookId: any): Observable<any> {
    return this.http.delete('http://localhost:5000/user/' + userId + '/editCurrentlyReadingBook', { body: { 'book': bookId } });
  }
  deleteFromWantToReadList(userId: any, bookId: any): Observable<any> {
    return this.http.delete('http://localhost:5000/user/' + userId + '/editWantToReadBook', { body: { 'book': bookId } });
  }
  deletefromReadList(userId: any, bookId: any): Observable<any> {
    return this.http.delete('http://localhost:5000/user/' + userId + '/editReadBook', { body: { 'book': bookId } });
  }
  addToWantToReadList(userId: any, bookId: any): Observable<any> {
    return this.http.post('http://localhost:5000/user/' + userId + '/addWantToReadBook', { 'book': bookId });
  }
  addToReadList(userId: any, bookId: any): Observable<any> {
    return this.http.post('http://localhost:5000/user/' + userId + '/addReadBook', { 'book': bookId });
  }
  addToCurrentelyReadingList(userId: any, bookId: any): Observable<any> {
    return this.http.post('http://localhost:5000/user/' + userId + '/addCurrentlyReadingBook', { 'book': bookId });
  }
  addComment(bookId: any, userId: any, comment: any): Observable<any> {
    return this.http.post('http://localhost:5000/book/' + bookId + '/comment', { 'userId': userId, 'Comment': comment });
  }

  registerBook(bookData: Book) {
    return this.http.post('http://localhost:5000/book/', bookData)
  }
  update(book: Book) {
    console.log(book.Name);
    this.http.patch('http://localhost:5000/book/' + book._id, book).subscribe(
      (resp) => {
        console.log("resp")
      },
      (err) => {
        console.log("err");

      }
    )
  }
  deleteBookById(id: any) {
    this.http.delete('http://localhost:5000/book/' + id).subscribe()
  }

}
