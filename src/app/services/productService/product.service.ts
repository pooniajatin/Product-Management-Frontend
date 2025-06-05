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
  getProduct(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/products/${id}`,{withCredentials: true})
  }
  createProduct(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/products`,data,{withCredentials: true})
  }
  deleteProduct(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/products/${id}`,{withCredentials: true})
  }
  updateProduct(id:any,data:any):Observable<any>{
    return this.http.patch(`${this.baseUrl}/products/${id}`,data,{withCredentials: true})
  }
}
