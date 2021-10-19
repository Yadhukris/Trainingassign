import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpviewcalComponent } from './empviewcal.component';

describe('EmpviewcalComponent', () => {
  let component: EmpviewcalComponent;
  let fixture: ComponentFixture<EmpviewcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpviewcalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpviewcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
