import { TestBed } from '@angular/core/testing';

import { RouteGuardPuntoFisicoService } from './route-guard-punto-fisico.service';

describe('RouteGuardPuntoFisicoService', () => {
  let service: RouteGuardPuntoFisicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardPuntoFisicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
