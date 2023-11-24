import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCampaignComponent } from './donation-campaign.component';

describe('DonationCampaignComponent', () => {
  let component: DonationCampaignComponent;
  let fixture: ComponentFixture<DonationCampaignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationCampaignComponent]
    });
    fixture = TestBed.createComponent(DonationCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
