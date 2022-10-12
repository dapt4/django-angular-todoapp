import { TestBed } from '@angular/core/testing';

import { SetStatusService } from './set-status.service';

describe('SetStatusService', () => {
  let service: SetStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
