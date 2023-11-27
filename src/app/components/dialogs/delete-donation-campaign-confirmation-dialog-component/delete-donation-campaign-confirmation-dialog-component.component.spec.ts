import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDonationCampaignConfirmationDialogComponentComponent } from './delete-donation-campaign-confirmation-dialog-component.component';

describe('DeleteDonationCampaignConfirmationDialogComponentComponent', () => {
  let component: DeleteDonationCampaignConfirmationDialogComponentComponent;
  let fixture: ComponentFixture<DeleteDonationCampaignConfirmationDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDonationCampaignConfirmationDialogComponentComponent]
    });
    fixture = TestBed.createComponent(DeleteDonationCampaignConfirmationDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
