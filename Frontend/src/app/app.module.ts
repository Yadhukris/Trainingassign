import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { LndHomeComponent } from './lnd-home/lnd-home.component';
import { RequestTrainingComponent } from './request-training/request-training.component';
import { EmpreqComponent } from './empreq/empreq.component';
import { ReqactionComponent } from './reqaction/reqaction.component';
import { AllocateDateComponent } from './allocate-date/allocate-date.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { EmpviewReportComponent } from './empview-report/empview-report.component';
import { ViewallocationComponent } from './viewallocation/viewallocation.component';
import { ViewparticipantsComponent } from './viewparticipants/viewparticipants.component';
import { EmpviewcalComponent } from './empviewcal/empviewcal.component';
import { ParticipateComponent } from './participate/participate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeHomeComponent,
    LndHomeComponent,
    RequestTrainingComponent,
    EmpreqComponent,
    ReqactionComponent,
    AllocateDateComponent,
    ViewReportComponent,
    EmpviewReportComponent,
    ViewallocationComponent,
    ViewparticipantsComponent,
    EmpviewcalComponent,
    ParticipateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
