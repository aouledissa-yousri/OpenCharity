import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManagementService } from 'src/app/services/UserManagementService/user-management.service';
import { IpfsHelper } from "../../../helpers/IpfsHelper"
import { FileHelper } from 'src/app/helpers/FileHelper';
import { WalletService } from 'src/app/services/WalletService/wallet.service';

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
    private router: Router,
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
    this.signUpForm.patchValue({
      profilePic: await IpfsHelper.uploadFile(this.image)
    })

    if(this.walletService.getWalletAddress() === "") this.walletService.connectWallet((window as any).ethereum)
    this.userManagementService.createAccount(this.signUpForm.value.username, this.signUpForm.value.profilePic)

  }



}
