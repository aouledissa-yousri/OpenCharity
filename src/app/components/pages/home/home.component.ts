import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationCampaign } from 'src/app/models/DonationCampaign';
import { DonationCampaignManagementService } from 'src/app/services/DonationCampaignManagementService/donation-campaign-management.service';
import { UserManagementService } from 'src/app/services/UserManagementService/user-management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

  donationCampaigns: DonationCampaign[] = []

  constructor(
    private userManagementService: UserManagementService,
    private donationCampaignManagementService: DonationCampaignManagementService,
    private router: Router
  ){}


  ngOnInit() {
    this.getAllDonationCampaigns()
  }

  
  public async connectWallet(){
    if( (window as any).ethereum ) {
      console.log(await this.userManagementService.login((window as any).ethereum))

    }
    
  }

  public async disconnectWallet(){
    this.userManagementService.logout()
  }

  public async getAllDonationCampaigns(){
    this.donationCampaigns = await this.donationCampaignManagementService.getAllDonationCampaigns()
  }

  public checkDonationCampaign(donationCampaign: DonationCampaign){
    this.router.navigateByUrl(`donation_campaign/${donationCampaign.getId()}`, {state: donationCampaign})
  }


}
