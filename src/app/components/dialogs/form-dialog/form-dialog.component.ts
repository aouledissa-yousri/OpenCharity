import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileHelper } from 'src/app/helpers/FileHelper';
import { IpfsHelper } from 'src/app/helpers/IpfsHelper';
import { UserManagementService } from 'src/app/services/UserManagementService/user-management.service';
import { WalletService } from 'src/app/services/WalletService/wallet.service';
import { User } from 'src/app/models/User';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { LoadingDialogComponent } from '../loading-dialog/loading-dialog.component';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';

interface FormDialogData {
  username: string,
  profilePic: string
}

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent implements OnInit{

  form!: FormGroup
  defaultImage = ""
  image!: File

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FormDialogData,
    private dialogRef: MatDialogRef<FormDialogComponent>,
    private userManagementService: UserManagementService,
    private walletService: WalletService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm()
    this.defaultImage = this.form.value.profilePic
  }

  public initForm(){
    this.form = this.formBuilder.group({
      username: [this.data.username, Validators.required],
      image: [null, Validators.required],
      profilePic: [this.data.profilePic]
    })
  }

  public async displayImage(event: any){
    const file = event.target.files[0]
    this.defaultImage = await FileHelper.getFilePath(file)
    this.image = file
  }

  public isValid() {
    return this.form.value.username !== "" && this.form.value.image !== null
  }

  public reset(){
    this.defaultImage = "../../../../assets/person.jpg"
    this.form.reset({
      username: "",
      profilePic: "",
      image: null
    })
  }


  public async updateAccount(){
    let dialogRef: any = this.dialog.open(LoadingDialogComponent, {data: "Updating Account..."})

    this.form.patchValue({
      profilePic: await IpfsHelper.uploadFile(this.image)
    })

    if(this.walletService.getWalletAddress() === null) this.walletService.connectWallet((window as any).ethereum)
    await this.userManagementService.updateAccount(this.form.value.username, this.form.value.profilePic)
    this.closeDialog()
    
    dialogRef.close()

    dialogRef = this.dialog.open(ResultDialogComponent, {data: {
      title: "Account Has Been Updated!!",
      description: "Your account information has been successfully updated."
    }})
    
  }

  public closeDialog(){
    this.dialogRef.close()
  }

}


