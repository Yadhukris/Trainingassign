import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-reqaction',
  templateUrl: './reqaction.component.html',
  styleUrls: ['./reqaction.component.css']
})
export class ReqactionComponent implements OnInit {

  Req = {
    Rid: 0,
    Empid: "",
    Ename: "",
    Techname: "",
    SuggestedTrainer: "",
    NumberofPart: 0,
    Startdate: new Date('12-12-2020')
    //Enddate:"",
    //Status:"",
    //Comment:"",
    //TrainingMode:""
  }

  Report = {
    Empid: "",
    Ename: "",
    Techname: "",
    SuggestedTrainer: "",
    NumberofPart: 0,
    Startdate: this.Req.Startdate,
    Enddate: new Date('12-12-2020'),
    Status: "",
    Comment: "",
    TrainingMode: "",

  }

  value: any;

  constructor(private empservice: EmployeeService, private router: Router, private repservice: ReportService) { }


  ngOnInit(): void {

    let Rid = localStorage.getItem("Rid")

    this.empservice.getempreq(Rid).subscribe(
      (data) => {
        this.Req = JSON.parse(JSON.stringify(data))
        console.log(this.Req);
      })


  }



  selectchangehandler(event: any) {

    console.log(event.target.value)
    let val = event.target.value;

    localStorage.setItem("Tmode", val)

  }

  TrainingMode() 
  {
    this.Report.Empid = this.Req.Empid;
    this.Report.Ename = this.Req.Ename;
    this.Report.Techname = this.Req.Techname;
    this.Report.SuggestedTrainer = this.Req.SuggestedTrainer;
    this.Report.NumberofPart = this.Req.NumberofPart;
    this.Report.Startdate = this.Req.Startdate;
    

    let val = localStorage.getItem("Tmode")?.toString();

    console.log(this.Req)

    if (val == "Linkedin" || val == "internal") {
      console.log("hi")
      this.Report.Enddate = this.Req.Startdate;
      this.Report.TrainingMode=val
      this.Report.Enddate=this.Req.Startdate
      this.Report.Status="Completed"
      this.repservice.addreport(this.Report).subscribe(res => {
        console.log("success")
        let Rid = localStorage.getItem("Rid")
      this.empservice.delreq(Rid).subscribe(res=>
        {
          console.log("record removed from request list")
        })
      })
       this.router.navigate(["LndHome"]); 

    }
    else
    {
      let val = localStorage.getItem("Tmode")?.toString();
      this.Report.Status="Assigned Trainer"
      this.router.navigate(["DateAllocate"]);
    }

    //console.log(this.Report)
  }

}
