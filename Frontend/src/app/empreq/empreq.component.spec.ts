import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreqComponent } from './empreq.component';

describe('EmpreqComponent', () => {
  let component: EmpreqComponent;
  let fixture: ComponentFixture<EmpreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
