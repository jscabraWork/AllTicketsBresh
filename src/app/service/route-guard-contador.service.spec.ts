import { TestBed } from '@angular/core/testing';

import { RouteGuardContadorService } from './route-guard-contador.service';

describe('RouteGuardContadorService', () => {
  let service: RouteGuardContadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardContadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
