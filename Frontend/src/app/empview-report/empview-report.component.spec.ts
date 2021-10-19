import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpviewReportComponent } from './empview-report.component';

describe('EmpviewReportComponent', () => {
  let component: EmpviewReportComponent;
  let fixture: ComponentFixture<EmpviewReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpviewReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpviewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
