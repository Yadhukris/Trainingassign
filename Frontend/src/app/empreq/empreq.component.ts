import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-empreq',
  templateUrl: './empreq.component.html',
  styleUrls: ['./empreq.component.css']
})
export class EmpreqComponent implements OnInit {

  constructor(private empservice: EmployeeService, private router: Router, private repservice: ReportService) { }

  Req = [{
    Rid: 0,
    Empid: "",
    Ename: "",
    Techname: "",
    SuggestedTrainer: "",
    NumberofPart: 0,
    Startdate: new Date('12-12-2020'),
    Status: ""
  }]

  Reqs = {
    Rid: 0,
    Empid: "",
    Ename: "",
    Techname: "",
    SuggestedTrainer: "",
    NumberofPart: 0,
    Startdate: new Date('12-12-2020'),
    Status: ""
  }

  Report = {
    Empid: "",
    Ename: "",
    Techname: "",
    SuggestedTrainer: "",
    NumberofPart: 0,
    Startdate: "",
    Enddate: new Date('12-12-2020'),
    Status: "",
    Comment: "",
    TrainingMode: "",

  }

  ngOnInit(): void {

    this.empservice.getallreq().subscribe((data) => {
      this.Req = JSON.parse(JSON.stringify(data))
      console.log(this.Req);
    })
  }

  Takeaction(item: any) {

    localStorage.setItem("Rid", item.Rid)
    this.router.navigate(["Reqaction"]);

  }

  delete(Rid: any) {
    this.empservice.getempreq(Rid).subscribe(
      (data) => {
        this.Reqs = JSON.parse(JSON.stringify(data))
        console.log(this.Req);
      })

    this.Report.Empid = this.Reqs.Empid;
    this.Report.Ename = this.Reqs.Ename;
    this.Report.Techname = this.Reqs.Techname;
    this.Report.SuggestedTrainer = this.Reqs.SuggestedTrainer;
    this.Report.NumberofPart = this.Reqs.NumberofPart;
    this.Report.Status = "Deleted"

    this.repservice.addreport(this.Report).subscribe(res => {
      console.log("success")
      let Rid = localStorage.getItem("Rid")
      this.empservice.delreq(Rid).subscribe(res => {
        console.log("record removed from request list")
      })
    })
    this.router.navigate(["LndHome"]);

  }

}
