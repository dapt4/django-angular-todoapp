import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TodoType} from './todoType';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor(private http: HttpClient) { }

  save(id:string, todo: TodoType){
    let url: string = `http://localhost:8000/todo/${id}`;
    return this.http.put(url, todo)
  }

}
