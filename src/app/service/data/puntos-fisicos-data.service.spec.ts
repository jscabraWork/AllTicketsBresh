import { TestBed } from '@angular/core/testing';

import { PuntosFisicosDataService } from './puntos-fisicos-data.service';

describe('PuntosFisicosDataService', () => {
  let service: PuntosFisicosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntosFisicosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
