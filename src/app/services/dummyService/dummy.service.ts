import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:3000/api/v1';
  dummyService():Observable<any>{
    return this.http.get(`${this.baseUrl}/dummy`)
  }
}
