import { TestBed } from '@angular/core/testing';

import { ImagenDataService } from './imagen-data.service';

describe('ImagenDataService', () => {
  let service: ImagenDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
