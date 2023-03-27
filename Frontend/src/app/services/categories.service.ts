import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/category', { headers: new HttpHeaders().set('Authorization', 'secret token') })
  }
  getCategoryByTd(id: any): Observable<any> {
    return this.http.get<any[]>('http://localhost:5000/category/' + id, { headers: new HttpHeaders().set('Authorization', 'secret token') })
  }
  deleteCategoryById(id: any) {
    this.http.delete('http://localhost:5000/category/' + id).subscribe()
  }
  update(categ: any) {
    return this.http.put('http://localhost:5000/category/' + categ._id,categ)
  }
}
