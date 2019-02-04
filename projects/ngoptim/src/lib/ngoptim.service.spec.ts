import { TestBed } from '@angular/core/testing';

import { NgoptimService } from './ngoptim.service';

describe('NgoptimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgoptimService = TestBed.get(NgoptimService);
    expect(service).toBeTruthy();
  });
});
