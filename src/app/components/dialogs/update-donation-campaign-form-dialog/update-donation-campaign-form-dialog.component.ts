import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FileHelper } from 'src/app/helpers/FileHelper';
import { DonationCampaign } from 'src/app/models/DonationCampaign';
import { DonationCampaignManagementService } from '../../../services/DonationCampaignManagementService/donation-campaign-management.service';
import { LoadingDialogComponent } from '../loading-dialog/loading-dialog.component';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';

@Component({
  selector: 'app-update-donation-campaign-form-dialog',
  templateUrl: './update-donation-campaign-form-dialog.component.html',
  styleUrls: ['./update-donation-campaign-form-dialog.component.scss']
})
export class UpdateDonationCampaignFormDialogComponent implements OnInit {

  donationCampaignData! : DonationCampaign
  image!: File
  form!: FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DonationCampaign,
    private donationCampaignManagementService: DonationCampaignManagementService,
    private dialogRef: MatDialogRef<UpdateDonationCampaignFormDialogComponent>,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.getDonationCampaignData()
    this.initForm()
  }

  public getDonationCampaignData(){
    this.donationCampaignData = this.data
  }

  public initForm(){
    this.form = this.formBuilder.group({
      title: [this.donationCampaignData.getTitle(), Validators.required],
      image: [null, Validators.required],
      wallpaper: [this.donationCampaignData.getWallpaper()],
      description: [this.donationCampaignData.getDescription(), Validators.required]
    })
  }

  public isValid(){
    return this.form.value.title !== "" && 
           this.form.value.image !== null &&
           this.form.value.description !== ""
  }

  public reset(){
    this.donationCampaignData.setWallpaper("../../../../assets/placeholder.png")
    this.form.reset({
      title: "",
      image: null,
      wallpaper: "../../../../assets/placeholder.png",
      description: ""
    })
  }

  public async updateDonationCampaign(){
    let dialogRef: any = this.dialog.open(LoadingDialogComponent, {data: "Updating Donation Campaign..."})

    this.donationCampaignData.update(
      this.form.value.title,
      this.form.value.description,
      this.form.value.wallpaper,
    )

    await this.donationCampaignManagementService.updateDononationCampaign(this.donationCampaignData)
    this.dialogRef.close()
    dialogRef.close()

    dialogRef = this.dialog.open(ResultDialogComponent, {data: {
      title: "Donation Campaign Has Been Updated!!",
      description: "Your donation campaign data has been updated successfully"
    }})
  }

  public async displayImage(event: any){
    const file = event.target.files[0]
    this.donationCampaignData.setWallpaper(await FileHelper.getFilePath(file))
    this.image = file
  }



}
