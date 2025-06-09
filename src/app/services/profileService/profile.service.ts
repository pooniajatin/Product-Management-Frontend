import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { profile } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }
   private baseUrl = 'http://localhost:3000/api/v1'
   getProfile(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/profile/${id}`,{withCredentials: true})
   }
   createProfile(data:profile):Observable<any>{
    return this.http.post(`${this.baseUrl}/profile`,data,{withCredentials: true})
   }
   deleteProfile(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/profile/${id}`)
   }
   updateProfile(id:any,data:profile):Observable<any>{
    return this.http.patch(`${this.baseUrl}/profile/${id}`,data,{withCredentials: true})
   }
}
