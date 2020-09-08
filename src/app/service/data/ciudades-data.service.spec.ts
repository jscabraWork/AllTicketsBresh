import { TestBed } from '@angular/core/testing';

import { CiudadesDataService } from './ciudades-data.service';

describe('CiudadesDataService', () => {
  let service: CiudadesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiudadesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
