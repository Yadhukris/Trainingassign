import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-request-training',
  templateUrl: './request-training.component.html',
  styleUrls: ['./request-training.component.css']
})
export class RequestTrainingComponent implements OnInit {

  item={
    Empid:"",
    Ename:"",
    Password:"",
  } 

  Req={
    Empid:"",
    Ename:"",
    Techname:"",
    SuggestedTrainer:"",
    NumberofPart:0,
    Startdate:new Date('12-12-2020'),
    Status:"Open"

  }
  constructor( private loginservice:LoginService , private empservice:EmployeeService , private router: Router) { }
  


  ngOnInit(): void {

let Empid = localStorage.getItem("Empid");
console.log(Empid);
this.loginservice.getEmployer(Empid)
      .subscribe((data)=>{
        console.log(data);
        this.item=JSON.parse(JSON.stringify(data))
          })        
  }

  trainerreq()
  {
this.Req.Empid=this.item.Empid;
this.Req.Ename=this.item.Ename;
this.empservice.addreq(this.Req)
.subscribe( res=>
  {
    console.log("success")
    this.router.navigate(["singleemp"]);
  })
//console.log(this.Req);
  }

}
