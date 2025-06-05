import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:3000/api/v1'
  getAllProducts():Observable<any>{
    return this.http.get(`${this.baseUrl}/products`,{withCredentials: true})
  }
}
