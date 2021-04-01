import { TestBed } from '@angular/core/testing';

import { CarImageServiceService } from './car-image-service.service';

describe('CarImageServiceService', () => {
  let service: CarImageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarImageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
