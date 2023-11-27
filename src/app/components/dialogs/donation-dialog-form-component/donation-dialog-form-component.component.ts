import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DonationCampaign } from 'src/app/models/DonationCampaign';
import { DonationManagementService } from 'src/app/services/DonationManagementService/donation-management.service';
import { WalletService } from 'src/app/services/WalletService/wallet.service';

@Component({
  selector: 'app-donation-dialog-form-component',
  templateUrl: './donation-dialog-form-component.component.html',
  styleUrls: ['./donation-dialog-form-component.component.scss']
})
export class DonationDialogFormComponentComponent implements OnInit{

  form!: FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DonationCampaign,
    private donationManagmentService: DonationManagementService,
    private walletService: WalletService,
    private dialogRef: MatDialogRef<DonationDialogFormComponentComponent>,
    private formBuilder: FormBuilder,
  ){}


  ngOnInit(): void {
    this.initForm()
  }

  public initForm(){
    this.form = this.formBuilder.group({
      amount: [0, Validators.required]
    })
  }

  public isValid(){
    return this.form.value.amount > 0
  }

  public reset(){
    this.form.reset({
      amount: 0
    })
  }

  public async donate(){
    await this.donationManagmentService.donate(this.data.getId(), this.form.value.amount, this.data.getBeneficiary(), this.walletService.getWalletAddress())
    this.dialogRef.close()
  }


  public cancel(){
    this.dialogRef.close()
  }

}
