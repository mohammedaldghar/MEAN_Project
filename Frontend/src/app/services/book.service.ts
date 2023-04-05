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
  getPopularBooks():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:5000/book/popularBooks/',{headers: new HttpHeaders().set('Authorization', 'secret token')})
  }
  

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

  registerBook(bookData: any):Observable<any> {
    return this.http.post('http://localhost:5000/book/', bookData)
  }
  update(book: Book):Observable <any> {
    console.log(book.Name);
    return this.http.patch('http://localhost:5000/book/' + book._id, book)
  }
  deleteBookById(id: any):Observable<any>{
    return this.http.delete('http://localhost:5000/book/' + id)
  }
}
