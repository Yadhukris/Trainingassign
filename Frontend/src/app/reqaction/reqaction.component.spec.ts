import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqactionComponent } from './reqaction.component';

describe('ReqactionComponent', () => {
  let component: ReqactionComponent;
  let fixture: ComponentFixture<ReqactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
