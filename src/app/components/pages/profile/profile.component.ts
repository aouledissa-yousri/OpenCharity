import { Component, DoCheck, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserManagementService } from '../../../services/UserManagementService/user-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WalletService } from 'src/app/services/WalletService/wallet.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormDialogComponent } from '../../dialogs/form-dialog/form-dialog.component';
import { UserEventEmitterService } from 'src/app/event-emitters/UserEventEmitter/user-event-emitter.service';
import { animate, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit{

  user: User = new User("", "", "", {}, {})
  balance: number = 0



  constructor(
    private userManagementService: UserManagementService,
    private walletService : WalletService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private userEventEmitter: UserEventEmitterService
  ){}


  ngOnInit(): void {
    this.getUserData().then(data => this.getBalance())
    this.userEventEmitter.updateEvent.subscribe(() => this.getUserData().then(data => this.getBalance()))
  }


  private async getUserData(){
    this.activatedRoute.paramMap.subscribe(parameters => {
      const walletAddress = (parameters as any).params.walletAddress
      this.userManagementService.getUser(walletAddress).then(data => {
        this.user = data 
        if(this.user.getWalletAddress() === "") this.router.navigate(["**"])
      })
    })
  }

  public async getBalance(){
    this.balance = await this.walletService.getBalance(this.walletService.getWalletAddress())
  }

  public getWalletAddress(){
    return this.user.getWalletAddress()
  }

  public isCurrentUser(){
    return this.walletService.getWalletAddress() === this.user.getWalletAddress()
  }


  public openUpdateUserDialog(){
    this.dialog.open(FormDialogComponent, {
      data: {
        username: this.user.getUsername(),
        profilePic: this.user.getProfilePic(),
      }
      
    })
  }

  public getDonationCampaigns(){
    return this.user.getDonationCampaigns()
  }

  public checkDonationCampaign(id: string){
    this.router.navigateByUrl(`donation_campaign/${id}`, {state: this.user.getDonationCampaign(id)})
  }

  

}
