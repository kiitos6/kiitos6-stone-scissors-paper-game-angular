import { TestBed } from '@angular/core/testing';

import { SspService } from './ssp.service';

describe('SspService', () => {
  let service: SspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
