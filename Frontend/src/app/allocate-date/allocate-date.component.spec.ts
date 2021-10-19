import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateDateComponent } from './allocate-date.component';

describe('AllocateDateComponent', () => {
  let component: AllocateDateComponent;
  let fixture: ComponentFixture<AllocateDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocateDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
