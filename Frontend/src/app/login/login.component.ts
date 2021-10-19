import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  emp={
    Empid :  "",
    Password: ""  
  }

  item={
    Empid:"",
    Ename:"",
    Password:"",
  } 

  constructor(private loginservice:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  loginEmp()
  {
    console.log(this.emp)
    if(this.emp.Empid=="Admin" && this.emp.Password=="123")
    {
      this.router.navigate(["LndHome"]);
    
    }
    else
    {
    this.loginservice.getEmployer(this.emp.Empid)
      .subscribe((data)=>{
        console.log(data);
        this.item=JSON.parse(JSON.stringify(data))
        if(this.item.Password==this.emp.Password)
        {
          localStorage.setItem("Empid",this.emp.Empid)
          this.router.navigate(["singleemp"]);
        }  })
    }

  

  }

}
