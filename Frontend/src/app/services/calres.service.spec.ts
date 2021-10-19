import { TestBed } from '@angular/core/testing';

import { CalresService } from './calres.service';

describe('CalresService', () => {
  let service: CalresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
