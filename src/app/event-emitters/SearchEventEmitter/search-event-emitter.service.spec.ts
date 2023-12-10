import { TestBed } from '@angular/core/testing';

import { SearchEventEmitterService } from './search-event-emitter.service';

describe('SearchEventEmitterService', () => {
  let service: SearchEventEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchEventEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
