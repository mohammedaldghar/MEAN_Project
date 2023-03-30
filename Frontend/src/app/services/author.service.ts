import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../author';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }
  getAuthors():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:5000/author',{headers: new HttpHeaders().set('Authorization', 'secret token')})
  }
  getAuthorById(id:any):Observable<any[]>{
    return this.http.get<any[]>('http://localhost:5000/author/'+id,{headers: new HttpHeaders().set('Authorization', 'secret token')})
  }
  registerAuthor(authorData: Author) {
    return this.http.post('http://localhost:5000/author/', authorData)
  }
  update(author: Author) {
    console.log(author.firstName);
    return this.http.put('http://localhost:5000/author/' + author._id, author)
  }
  deleteAuthorById(id: any) {
    this.http.delete('http://localhost:5000/author/' + id).subscribe()
  }
}
