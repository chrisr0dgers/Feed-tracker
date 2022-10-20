import { TestBed } from '@angular/core/testing';

import { NappyDataService } from './nappy-data.service';

describe('NappyDataService', () => {
  let service: NappyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NappyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
