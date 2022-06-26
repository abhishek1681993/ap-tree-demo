import { TestBed } from '@angular/core/testing';

import { ApTreeService } from './ap-tree.service';

describe('ApTreeService', () => {
  let service: ApTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
