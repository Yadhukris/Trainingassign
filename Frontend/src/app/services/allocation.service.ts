import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  constructor(private http:HttpClient) { }

  addallocation(abc:any)
  {
    console.log("hello service")
    console.log(abc);
    
    return this.http.post<any>('https://localhost:44354/api/Allocations',abc)
  }

  getallocationdata()
  {
    return this.http.get('https://localhost:44354/api/Allocations')
  }
  getuniqueallocation(Aid:any)
  {
    console.log("hello service")
    console.log(Aid);
    return this.http.get('https://localhost:44354/api/Uniqueallocate/'+Aid)

  }
  

}
 