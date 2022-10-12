import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {


  constructor(
    private http: HttpClient
  ) { }

  getdata(id: string){
    let url: string = `http://localhost:8000/todo/${id}`
    return this.http.get(url)
  }

}
