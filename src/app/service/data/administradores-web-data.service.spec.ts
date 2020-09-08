import { TestBed } from '@angular/core/testing';

import { AdministradoresWebDataService } from './administradores-web-data.service';

describe('AdministradoresWebDataService', () => {
  let service: AdministradoresWebDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministradoresWebDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
