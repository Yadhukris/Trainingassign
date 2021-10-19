import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

  
  addreport(abc:any)
  {
    console.log("hello service")
    console.log(abc);
    
    return this.http.post<any>('https://localhost:44354/api/ReportFs',abc)
  }

  getallreport()
  {
    console.log("hello service")
    
    return this.http.get('https://localhost:44354/api/ReportFs')
  }

  getempreport(Empid:any)
  {
    return this.http.get('https://localhost:44354/api/Empreport/'+Empid)
  }

}
