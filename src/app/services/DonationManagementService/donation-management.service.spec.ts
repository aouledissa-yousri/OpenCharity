import { TestBed } from '@angular/core/testing';

import { DonationManagementService } from './donation-management.service';

describe('DonationManagementService', () => {
  let service: DonationManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
