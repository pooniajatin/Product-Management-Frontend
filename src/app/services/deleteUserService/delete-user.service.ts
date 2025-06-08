import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:3000/api/v1';
  deleteUser(id:any ):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`,{withCredentials:true})
  }
}
