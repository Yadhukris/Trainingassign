import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  item={
    Empid:"",
    Ename:"",
    Password:"",
  } 
  constructor( private loginservice:LoginService) { }
  


  ngOnInit(): void {

let Empid = localStorage.getItem("Empid");
console.log(Empid);
this.loginservice.getEmployer(Empid)
      .subscribe((data)=>{
        console.log(data);
        this.item=JSON.parse(JSON.stringify(data))
          })


  }

}
