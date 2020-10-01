import { TestBed } from '@angular/core/testing';

import { MinisterioDataService } from './ministerio-data.service';

describe('MinisterioDataService', () => {
  let service: MinisterioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinisterioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
