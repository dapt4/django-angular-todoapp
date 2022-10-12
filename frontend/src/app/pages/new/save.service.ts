import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoType } from './todoType';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  
  private url: string = "http://localhost:8000/todo";

  constructor(private http: HttpClient) { }

  save(todo: TodoType){
    return this.http.post(this.url, todo)
  }
}
