import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { API_CONFIG } from '../config/appi.config';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url : string = API_CONFIG.urlAPI;

  constructor(private http: HttpClient) { }

  save(category: Category): Observable<Category[]> {
    return this.http.post<Category[]>(this.url+'/category/save', category);
  }

  list(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url+'/category/list');
  }

  delete(idCategory: any): Observable<Category> {
    return this.http.delete<Category>(`${this.url}/category/delete/${idCategory}`);
  }

  findById(idCategory: any): Observable<Category> {
    return this.http.get<any>(`${this.url}/category/find/${idCategory}`);
  }

  update(category: Category): Observable<Category[]> {
    return this.http.put<Category[]>(this.url+'/category/update/${category.idCategory}', category);
  }
}
