import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetStatusService {


  constructor(private http: HttpClient) { }

  setStatus(id: number){
    let url: string = `http://localhost:8000/status/${id}`;
    return this.http.get(url)
  }
}
