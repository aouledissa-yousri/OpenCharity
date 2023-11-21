import { TestBed } from '@angular/core/testing';

import { DonationCampaignManagementService } from './donation-campaign-management.service';

describe('DonationCampaignManagementService', () => {
  let service: DonationCampaignManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationCampaignManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
