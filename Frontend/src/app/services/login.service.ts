import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  item={
    Empid:"",
    Ename:"",
    Password:"",
  } 
  emp={
    email:"",
    password:""
  }

  constructor(private http:HttpClient) { }

  getEmployer(id:any){
   return this.http.get('https://localhost:44354/api/UserModels/'+id)

  }
}
