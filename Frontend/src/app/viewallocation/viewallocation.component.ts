import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocationService } from '../services/allocation.service';

@Component({
  selector: 'app-viewallocation',
  templateUrl: './viewallocation.component.html',
  styleUrls: ['./viewallocation.component.css']
})
export class ViewallocationComponent implements OnInit {
  allocatedata = [
    {
      Aid:0,
      Techname: "",
      SuggestedTrainer: "",
      Startdate: new Date('12-12-2020'),
      Enddate: new Date('12-12-2020'),
      Status: "",
      StartTime:"",
      EndTime:""


    }
  ]

  calres=[{
    Aid: 0,
    Empid:"",
    Ename:"",
    Status: "",      
  }]


  constructor(private allocation: AllocationService,private router:Router ) { }

  ngOnInit(): void {
this.allocation.getallocationdata().subscribe((data)=>
  {
    console.log("success");
    this.allocatedata=JSON.parse(JSON.stringify(data))
  })

  }
  viewpaticipants(Aid:any)
  {
    localStorage.setItem("Aid",Aid);
    this.router.navigate(["Viewparticipants"]);

  }

}
