import { TestBed } from '@angular/core/testing';

import { PayUDataService } from './pay-u-data.service';

describe('PayUDataService', () => {
  let service: PayUDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayUDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
