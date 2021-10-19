import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllocateDateComponent } from './allocate-date/allocate-date.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmpreqComponent } from './empreq/empreq.component';
import { EmpviewReportComponent } from './empview-report/empview-report.component';
import { EmpviewcalComponent } from './empviewcal/empviewcal.component';
import { LndHomeComponent } from './lnd-home/lnd-home.component';
import { LoginComponent } from './login/login.component';
import { ReqactionComponent } from './reqaction/reqaction.component';
import { RequestTrainingComponent } from './request-training/request-training.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { ViewallocationComponent } from './viewallocation/viewallocation.component';
import { ViewparticipantsComponent } from './viewparticipants/viewparticipants.component';

const routes: Routes = [
  {path:'singleemp',component:EmployeeHomeComponent},
  {path:'',component:LoginComponent},
  {path:'LndHome',component:LndHomeComponent},
  {path:'RequestTraining',component:RequestTrainingComponent},
  {path:'Empreq',component:EmpreqComponent},
  {path:'Reqaction',component:ReqactionComponent},
  {path:'DateAllocate',component:AllocateDateComponent},
  {path:'ViewReport',component:ViewReportComponent},
  {path:'EmpviewReport',component:EmpviewReportComponent},
  {path:'Viewallocation',component:ViewallocationComponent},
  {path:'Empviewcal',component:EmpviewcalComponent},
  {path:'Viewparticipants',component:ViewparticipantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
