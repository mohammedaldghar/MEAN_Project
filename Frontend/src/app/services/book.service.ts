import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getBooksByCategory(id:any):Observable<any[]>{
    return this.http.get<any[]>('http://localhost:5000/book/categorybook/'+id,{headers: new HttpHeaders().set('Authorization', 'secret token')})
  }
  getBooks():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:5000/book',{headers: new HttpHeaders().set('Authorization', 'secret token')})
  }
  getBooksByAuthor(id:any):Observable<any[]>{
    return this.http.get<any[]>('http://localhost:5000/book/authorbook/'+id,{headers: new HttpHeaders().set('Authorization', 'secret token')})
  }
}
