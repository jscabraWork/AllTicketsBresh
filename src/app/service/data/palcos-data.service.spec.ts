import { TestBed } from '@angular/core/testing';

import { PalcosDataService } from './palcos-data.service';

describe('PalcosDataService', () => {
  let service: PalcosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalcosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
