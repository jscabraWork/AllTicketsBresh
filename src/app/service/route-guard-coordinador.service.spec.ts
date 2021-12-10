import { TestBed } from '@angular/core/testing';

import { RouteGuardCoordinadorService } from './route-guard-coordinador.service';

describe('RouteGuardCoordinadorService', () => {
  let service: RouteGuardCoordinadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardCoordinadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
