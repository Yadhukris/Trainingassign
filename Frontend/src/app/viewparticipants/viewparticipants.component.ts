import { Component, OnInit } from '@angular/core';
import { AllocationService } from '../services/allocation.service';

@Component({
  selector: 'app-viewparticipants',
  templateUrl: './viewparticipants.component.html',
  styleUrls: ['./viewparticipants.component.css']
})
export class ViewparticipantsComponent implements OnInit {

  calres=[{
    Aid: 0,
    Empid:"",
    Ename:"",
    Status: "",      
  }]


  constructor(private allocation: AllocationService) { }

  ngOnInit(): void {

    let Aid=localStorage.getItem("Aid");
    this.allocation.getuniqueallocation(Aid).subscribe((data)=>
    {
      console.log("success");
      this.calres=JSON.parse(JSON.stringify(data))
      console.log(this.calres);
    })

  }

}
