import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';    // i use it for decode token
import { Router } from '@angular/router';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _HttpClient: HttpClient, private _Router: Router)
  {
    if (localStorage.getItem('userToken') != null) {
      this.saveCurrentUser();    //if brouser refresh and local storage not equal null call function saveuser  
    }
  }
  currentUser = new BehaviorSubject({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: false,
    readingBooks: "",
    wantToReadBooks: [],
    readBooks: []
  });

  saveCurrentUser() {
    let token: any = localStorage.getItem('userToken')   /* go to local storage and git useToken and decode it */
    this.currentUser.next(jwtDecode(token));
    //console.log(this.currentUser.value);
  }
  register(formData: any): Observable<any> {
    return this._HttpClient.post<any>('http://localhost:5000/user', formData);
  }
  login(formData: any): Observable<any> {
    return this._HttpClient.post<any>('http://localhost:5000/login', formData);
  }
  logout() {
    this.currentUser.next(
      {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        isAdmin: false,
        readingBooks: "",
        wantToReadBooks: [],
        readBooks: []
      })
    localStorage.removeItem('userToken');
    localStorage.removeItem('loggedUser');
    this._Router.navigate(['/login'])
  }
}
