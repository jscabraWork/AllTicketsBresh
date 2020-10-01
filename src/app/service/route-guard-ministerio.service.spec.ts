import { TestBed } from '@angular/core/testing';

import { RouteGuardMinisterioService } from './route-guard-ministerio.service';

describe('RouteGuardMinisterioService', () => {
  let service: RouteGuardMinisterioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardMinisterioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
