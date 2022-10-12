import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  get(){
    const url: string = "http://localhost:8000/todo";
    return this.http.get(url)
  }
}
