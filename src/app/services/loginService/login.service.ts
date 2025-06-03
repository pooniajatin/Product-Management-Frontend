import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:3000/api/v1'
  loginUser(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/login`,data);
  }
}
