import { TestBed } from '@angular/core/testing';

import { ServicDataService } from './servic-data.service';

describe('ServicDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicDataService = TestBed.get(ServicDataService);
    expect(service).toBeTruthy();
  });
});
