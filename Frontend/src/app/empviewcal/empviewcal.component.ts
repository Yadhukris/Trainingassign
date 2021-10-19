import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../services/allocation.service';
import { CalresService } from '../services/calres.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-empviewcal',
  templateUrl: './empviewcal.component.html',
  styleUrls: ['./empviewcal.component.css']
})
export class EmpviewcalComponent implements OnInit {

  allocatedata = [
    {
      Aid: 0,
      Techname: "",
      SuggestedTrainer: "",
      Startdate: new Date('12-12-2020'),
      Enddate: new Date('12-12-2020'),
      Status: "",


    }
  ]

  calres={
    Aid: 0,
    Empid:"",
    Ename:"",
    Status: "",      
  }

  item={
    Empid:"",
    Ename:"",
    Password:"",
  }

  constructor(private allocation: AllocationService , private loginservice:LoginService , private saveres:CalresService , private router:Router) { }

  ngOnInit(): void {
this.allocation.getallocationdata().subscribe((data)=>
  {
    console.log("success");
    this.allocatedata=JSON.parse(JSON.stringify(data))
  })

  let Empid = localStorage.getItem("Empid");
  console.log(Empid);
  this.loginservice.getEmployer(Empid)
        .subscribe((data)=>{
          console.log(data);
          this.item=JSON.parse(JSON.stringify(data))
            })    

  }
  Participate(Aid:any)
  {

this.calres.Aid=Aid;
this.calres.Empid=this.item.Empid;
this.calres.Ename=this.item.Ename;
this.calres.Status="Waiting cofirmation";

this.saveres.addres(this.calres).subscribe(res=>
  {
    console.log("success");
  })
  this.router.navigate(["singleemp"]);
  }

  
}
