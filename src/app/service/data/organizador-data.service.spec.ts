import { TestBed } from '@angular/core/testing';

import { OrganizadorDataService } from './organizador-data.service';

describe('OrganizadorDataService', () => {
  let service: OrganizadorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizadorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
