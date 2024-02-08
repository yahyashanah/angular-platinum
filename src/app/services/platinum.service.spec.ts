import { TestBed } from '@angular/core/testing';

import { PlatinumService } from './platinum.service';

describe('PlatinumService', () => {
  let service: PlatinumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatinumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
