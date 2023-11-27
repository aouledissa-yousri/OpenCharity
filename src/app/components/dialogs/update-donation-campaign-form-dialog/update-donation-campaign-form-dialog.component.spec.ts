import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDonationCampaignFormDialogComponent } from './update-donation-campaign-form-dialog.component';

describe('UpdateDonationCampaignFormDialogComponent', () => {
  let component: UpdateDonationCampaignFormDialogComponent;
  let fixture: ComponentFixture<UpdateDonationCampaignFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDonationCampaignFormDialogComponent]
    });
    fixture = TestBed.createComponent(UpdateDonationCampaignFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
