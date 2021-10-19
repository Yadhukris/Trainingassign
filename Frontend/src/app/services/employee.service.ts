import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addreq(emp:any)
  {
    console.log(emp);
    return this.http.post<any>('https://localhost:44354/api/EmployeeRequests',emp)
  }
  getallreq()
  {
    return this.http.get('https://localhost:44354/api/EmployeeRequests')
  }
  getempreq(Rid:any)
  {
    return this.http.get('https://localhost:44354/api/EmployeeRequests/'+Rid)
  }

  delreq(Rid:any)
  {
    return this.http.delete('https://localhost:44354/api/EmployeeRequests/'+Rid)
  }

  updatereq(Rid:any,emp:any)
  {
    console.log(emp);
    return this.http.put<any>('https://localhost:44354/api/EmployeeRequests/'+Rid,emp)
  }

}
