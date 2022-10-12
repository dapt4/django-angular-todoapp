import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Data} from './dataTypes';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  private url = 'http://localhost:8000/register';

  constructor(private http: HttpClient) { }

  save(data:Data){
    return this.http.post(this.url, data)
  }

}
