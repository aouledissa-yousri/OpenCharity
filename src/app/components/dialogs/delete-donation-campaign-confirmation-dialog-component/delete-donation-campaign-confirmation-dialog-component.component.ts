import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DonationCampaign } from 'src/app/models/DonationCampaign';
import { DonationCampaignManagementService } from 'src/app/services/DonationCampaignManagementService/donation-campaign-management.service';

@Component({
  selector: 'app-delete-donation-campaign-confirmation-dialog-component',
  templateUrl: './delete-donation-campaign-confirmation-dialog-component.component.html',
  styleUrls: ['./delete-donation-campaign-confirmation-dialog-component.component.scss']
})
export class DeleteDonationCampaignConfirmationDialogComponentComponent {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DonationCampaign,
    private donationCampaignManagementService: DonationCampaignManagementService,
    private dialogRef: MatDialogRef<DeleteDonationCampaignConfirmationDialogComponentComponent>,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}


  public async confirm(){
    await this.donationCampaignManagementService.deleteDonationCampaign(this.data)
    this.router.navigate(["profile", this.data.getBeneficiary()])
    this.dialogRef.close()
  }

  public cancel(){
    this.dialogRef.close()
  }

}
