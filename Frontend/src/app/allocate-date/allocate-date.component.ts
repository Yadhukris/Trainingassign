import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../services/allocation.service';
import { EmployeeService } from '../services/employee.service';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-allocate-date',
  templateUrl: './allocate-date.component.html',
  styleUrls: ['./allocate-date.component.css']
})
export class AllocateDateComponent implements OnInit {

  constructor(private empservice: EmployeeService, private router: Router, private repservice: ReportService, private allservice: AllocationService) { }

  Req = {
    Rid: 0,
    Empid: "",
    Ename: "",
    Techname: "",
    SuggestedTrainer: "",
    NumberofPart: 0,
    Startdate: new Date('12-12-2020'),
    //Enddate:"",
      Status:""
    //Comment:"",
    //TrainingMode:""
  }


  Report = {
    Empid: "",
    Ename: "",
    Techname: "",
    SuggestedTrainer: "",
    NumberofPart: 0,
    Startdate: new Date('12-12-2020'),
    Enddate: new Date('12-12-2020'),
    Status: "",
    Comment: "",
    TrainingMode: ""

  }

  allocation =
    {
      Techname: "",
      SuggestedTrainer: "",
      Startdate: new Date('12-12-2020'),
      Enddate: new Date('12-12-2020'),
      Status: "",
      StartTime:"",
      EndTime:""
    }

  ngOnInit(): void {

    let val = localStorage.getItem("Tmode")?.toString()
    let Rid = localStorage.getItem("Rid")

    this.empservice.getempreq(Rid).subscribe(
      (data) => {
        this.Req = JSON.parse(JSON.stringify(data))
        console.log(this.Req);
      })

  }

  TrainingAllocate() {
     let val = localStorage.getItem("Tmode")?.toString()
     val?.toString();
     console.log(val)

    this.allocation.Techname = this.Req.Techname;
    this.allocation.SuggestedTrainer = this.Req.SuggestedTrainer;
    this.allocation.Startdate = this.Req.Startdate;
    this.allocation.Enddate = this.Report.Enddate

    

   

    //this.Report.TrainingMode = val;
    this.Report.Enddate = this.Report.Enddate;
    this.Report.Status = "Trainer Assigned"
 
    this.allservice.addallocation(this.allocation).subscribe(res => {
      console.log("success")
      
    })
    let Rid = localStorage.getItem("Rid")
    this.Req.Status="Trainer assigned";
    this.empservice.updatereq(Rid,this.Req)
    .subscribe( res=>
      {  
        console.log("success")
        this.router.navigate(["LndHome"]);
      })
    

  }

}
