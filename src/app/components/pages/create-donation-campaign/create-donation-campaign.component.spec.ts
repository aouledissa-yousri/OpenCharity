import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDonationCampaignComponent } from './create-donation-campaign.component';

describe('CreateDonationCampaignComponent', () => {
  let component: CreateDonationCampaignComponent;
  let fixture: ComponentFixture<CreateDonationCampaignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDonationCampaignComponent]
    });
    fixture = TestBed.createComponent(CreateDonationCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
