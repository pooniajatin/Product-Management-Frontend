import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LogoutService {
 
  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:3000/api/v1'
   logoutUser(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/logout`, data,  {withCredentials: true} );
}
}
