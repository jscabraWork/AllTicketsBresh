import { TestBed } from '@angular/core/testing';

import { MandarCorreosService } from './mandar-correos.service';

describe('MandarCorreosService', () => {
  let service: MandarCorreosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MandarCorreosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
