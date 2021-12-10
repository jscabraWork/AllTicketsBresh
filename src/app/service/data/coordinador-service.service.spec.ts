import { TestBed } from '@angular/core/testing';

import { CoordinadorServiceService } from './coordinador-service.service';

describe('CoordinadorServiceService', () => {
  let service: CoordinadorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinadorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
