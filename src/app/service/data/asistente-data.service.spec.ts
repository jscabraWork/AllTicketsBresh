import { TestBed } from '@angular/core/testing';

import { AsistenteDataService } from './asistente-data.service';

describe('AsistenteDataService', () => {
  let service: AsistenteDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsistenteDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
