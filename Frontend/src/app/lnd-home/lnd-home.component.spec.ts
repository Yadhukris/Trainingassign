import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LndHomeComponent } from './lnd-home.component';

describe('LndHomeComponent', () => {
  let component: LndHomeComponent;
  let fixture: ComponentFixture<LndHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LndHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LndHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
