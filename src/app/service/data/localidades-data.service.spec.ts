import { TestBed } from '@angular/core/testing';

import { LocalidadesDataService } from './localidades-data.service';

describe('LocalidadesDataService', () => {
  let service: LocalidadesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalidadesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
