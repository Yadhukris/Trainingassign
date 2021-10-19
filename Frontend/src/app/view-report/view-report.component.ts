import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  constructor(private empservice: EmployeeService, private router: Router, private repservice: ReportService) { }

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

  ngOnInit(): void {

this.repservice.getallreport().subscribe((data)=>
{
  this.Report=JSON.parse(JSON.stringify(data))
})

  }

}
