import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-empview-report',
  templateUrl: './empview-report.component.html',
  styleUrls: ['./empview-report.component.css']
})
export class EmpviewReportComponent implements OnInit {


  Report = [{
    Rid:0,
    Empid: "",
    Ename: "",
    Techname: "",
    SuggestedTrainer: "",
    NumberofPart: 0,
    Startdate: new Date('12-12-2020'),
    Enddate: new Date('12-12-2020'),
    Status: "",
    Comment: "",
    TrainingMode: "",

  }]
  item={
    Empid:"",
    Ename:"",
    Password:"",
  } 

  constructor(private router: Router, private repservice: ReportService , private loginservice:LoginService) { }
  

  ngOnInit(): void {
    let Empid = localStorage.getItem("Empid");
    console.log(Empid);
    this.loginservice.getEmployer(Empid)
          .subscribe((data)=>{
            console.log(data);
            this.item=JSON.parse(JSON.stringify(data))
              })



   this.repservice.getempreport(Empid).subscribe((data)=>
   {
    this.Report=JSON.parse(JSON.stringify(data))
    console.log(data);
   })

  }

}
