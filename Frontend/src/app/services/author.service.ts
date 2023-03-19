import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
