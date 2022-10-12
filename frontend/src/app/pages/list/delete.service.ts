import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }

  delete(id:number){
    let url: string = `http://localhost:8000/todo/${id}`;
    return this.http.delete(url)
  }
}
