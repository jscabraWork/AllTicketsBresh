import { TestBed } from '@angular/core/testing';

import { LectorDataService } from './lector-data.service';

describe('LectorDataService', () => {
  let service: LectorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LectorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
