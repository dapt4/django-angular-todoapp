import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoginData} from './LoginTypes';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private url = "http://localhost:8000/login";

  constructor( private http: HttpClient) { }

  sign(data: LoginData){
    return this.http.post(this.url, data)
  }
}
