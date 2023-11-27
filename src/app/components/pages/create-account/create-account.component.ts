import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManagementService } from 'src/app/services/UserManagementService/user-management.service';
import { IpfsHelper } from "../../../helpers/IpfsHelper"
import { FileHelper } from 'src/app/helpers/FileHelper';
import { WalletService } from 'src/app/services/WalletService/wallet.service';
import { MatDialog } from '@angular/material/dialog';
import { LoadingDialogComponent } from '../../dialogs/loading-dialog/loading-dialog.component';
import { ResultDialogComponent } from '../../dialogs/result-dialog/result-dialog.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit{

  signUpForm!: FormGroup;
  defaultImage = "../../../../assets/person.jpg"
  image!: File

  constructor(
    private userManagementService: UserManagementService,
    private walletService: WalletService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.initForm()
  }

  public initForm(){
    this.signUpForm = this.formBuilder.group({
      username: ["", Validators.required],
      image: [null, Validators.required],
      profilePic: [""]
    })
  }

  public async displayImage(event: any){
    const file = event.target.files[0]
    this.defaultImage = await FileHelper.getFilePath(file)
    this.image = file
  }

  public isValid() {
    return this.signUpForm.value.username !== "" && this.signUpForm.value.image !== null
  }


  public reset(){
    this.defaultImage = "../../../../assets/person.jpg"
    this.signUpForm.reset({
      username: "",
      profilePic: "",
      image: null
    })
  }


  public async createAccount(){
    let dialogRef: any = this.dialog.open(LoadingDialogComponent, {data: "Creating Account..."})

    this.signUpForm.patchValue({
      profilePic: await IpfsHelper.uploadFile(this.image)
    })


    if(this.walletService.getWalletAddress() === null) this.walletService.connectWallet((window as any).ethereum)
    await this.userManagementService.createAccount(this.signUpForm.value.username, this.signUpForm.value.profilePic)

    dialogRef.close()
    this.reset()

    dialogRef = this.dialog.open(ResultDialogComponent, {data: {
      title: "Account Has Been Created!!",
      description: "Congratulations! Your account has been successfully created. You can now access all the features and benefits of our platform."
    }})


  }



}
