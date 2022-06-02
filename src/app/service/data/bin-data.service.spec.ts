import { TestBed } from '@angular/core/testing';

import { BinDataService } from './bin-data.service';

describe('BinDataService', () => {
  let service: BinDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
