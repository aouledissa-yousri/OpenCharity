import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationCampaignManagementService } from 'src/app/services/DonationCampaignManagementService/donation-campaign-management.service';
import { Location } from '@angular/common';
import { DonationCampaign } from 'src/app/models/DonationCampaign';
import { DateHelper } from 'src/app/helpers/DateHelper';
import { Donation } from 'src/app/models/Donation';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDonationCampaignFormDialogComponent } from '../../dialogs/update-donation-campaign-form-dialog/update-donation-campaign-form-dialog.component';
import { DeleteDonationCampaignConfirmationDialogComponentComponent } from '../../dialogs/delete-donation-campaign-confirmation-dialog-component/delete-donation-campaign-confirmation-dialog-component.component';
import { DonationManagementService } from '../../../services/DonationManagementService/donation-management.service';
import { WalletService } from 'src/app/services/WalletService/wallet.service';
import { DonationDialogFormComponentComponent } from '../../dialogs/donation-dialog-form-component/donation-dialog-form-component.component';

@Component({
  selector: 'app-donation-campaign',
  templateUrl: './donation-campaign.component.html',
  styleUrls: ['./donation-campaign.component.scss']
})
export class DonationCampaignComponent implements OnInit {

  donationCampaignData!: DonationCampaign

  constructor(
    private donationCampaignManagementService: DonationCampaignManagementService,
    private donationManagementService: DonationManagementService,
    private walletService: WalletService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ){}


  ngOnInit(): void {
    this.getDonationampaignData()
  }

  public isBeneficiary(){
    return this.donationCampaignData.getBeneficiary() === this.walletService.getWalletAddress()
  }

  public getDonationampaignData(){
    this.donationCampaignManagementService.getDonationCampaign(
      this.activatedRoute.snapshot.params["id"]
    ).then(data => {
      this.donationCampaignData = data
      console.log(this.donationCampaignData.getDonations())
    })
  }

  public reformatDate(date: string){
    return DateHelper.reformatDate(date)
  }

  public getDonations(){
    return Object.values(this.donationCampaignData.getDonations())
  }

  public openUpdateDonationCampaignDialog(){
    this.dialog.open(UpdateDonationCampaignFormDialogComponent, {
      data: this.donationCampaignData
    })
  }

  public openDeleteDonationCampaignDialog(){
    this.dialog.open(DeleteDonationCampaignConfirmationDialogComponentComponent, {
      data: this.donationCampaignData
    })
  }

  public openDonationDialog(){
    this.dialog.open(DonationDialogFormComponentComponent, {
      data: this.donationCampaignData
    })
  }

  public isCurrentUser() {
    return this.donationCampaignData.getBeneficiary() === this.walletService.getWalletAddress()
  }

}
