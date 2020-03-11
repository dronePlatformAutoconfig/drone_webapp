import { TestBed } from '@angular/core/testing';

import { ROSConnectionService } from './rosconnection.service';

describe('ROSConnectionService', () => {
  let service: ROSConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ROSConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
