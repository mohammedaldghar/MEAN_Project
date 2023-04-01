import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 


  }

  getCurrentlyBooks(id:any):Observable<any>{
    return this.http.get('http://localhost:5000/user/'+id+'/currentReading')
  }
  getReadBooks(id:any):Observable<any>{
    return this.http.get('http://localhost:5000/user/'+id+'/wantToRead')
  }
  getWantToReadBooks(id:any):Observable<any>{
    return this.http.get('http://localhost:5000/user/'+id+'/read')
  }
  getAllBooks(id:any):Observable<any[]>{
    return this.http.get<any[]>('http://localhost:5000/user/'+id+'/allBooks',{headers: new HttpHeaders().set('Authorization', 'secret token')})
  }
  
  }

