import { TestBed } from '@angular/core/testing';

import { EtapasDataService } from './etapas-data.service';

describe('EtapasDataService', () => {
  let service: EtapasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtapasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
