import { TestBed } from '@angular/core/testing';

import { TorneiService } from './tornei.service';

describe('TorneiService', () => {
  let service: TorneiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TorneiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
