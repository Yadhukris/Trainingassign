import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalresService {

  constructor(private http:HttpClient) { }

  addres(abc:any)
  {
    console.log("hello service")
    console.log(abc);
    
    return this.http.post<any>('https://localhost:44354/api/allocationres1',abc)
  }
}
