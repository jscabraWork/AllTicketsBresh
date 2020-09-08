import { TestBed } from '@angular/core/testing';

import { BoletasDataService } from './boletas-data.service';

describe('BoletasDataService', () => {
  let service: BoletasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoletasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
