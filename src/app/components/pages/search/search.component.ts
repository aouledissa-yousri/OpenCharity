import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchEventEmitterService } from 'src/app/event-emitters/SearchEventEmitter/search-event-emitter.service';
import { DonationCampaign } from 'src/app/models/DonationCampaign';
import { User } from 'src/app/models/User';
import { DonationCampaignManagementService } from 'src/app/services/DonationCampaignManagementService/donation-campaign-management.service';
import { UserManagementService } from 'src/app/services/UserManagementService/user-management.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  donationCampaigns: DonationCampaign[] = []
  users: User[] = []

  usersSearchResult: User[] = []
  donationCampaignsSearchResult: DonationCampaign[] = []


  constructor(
    private userManagementService: UserManagementService,
    private donationCampaignManagementService: DonationCampaignManagementService,
    private searchEventEmitter: SearchEventEmitterService,
    private router: Router
  ){}

  ngOnInit() {
    this.getAllDonationCampaigns()
    this.getAllUsers()

    this.searchEventEmitter.searchEvent.subscribe((keyword) => {
      this.usersSearchResult = this.users.filter(user => user.getUsername().toLowerCase().includes(keyword.toLowerCase()))
      this.donationCampaignsSearchResult = this.donationCampaigns.filter(donationCampaign => donationCampaign.getTitle().toLowerCase().includes(keyword.toLowerCase()) || donationCampaign.getDescription().toLowerCase().includes(keyword.toLowerCase()))
    })
  }

  public async getAllUsers() {
    this.users = await this.userManagementService.getUsers()
    this.usersSearchResult = this.users
  }

  public async getAllDonationCampaigns(){
    this.donationCampaigns = await this.donationCampaignManagementService.getAllDonationCampaigns()
    this.donationCampaignsSearchResult = this.donationCampaigns
  }

  public checkDonationCampaign(donationCampaign: DonationCampaign){
    this.router.navigateByUrl(`donation_campaign/${donationCampaign.getId()}`, {state: donationCampaign})
  }

  public checkUser(user: User){
    this.router.navigateByUrl(`profile/${user.getWalletAddress()}`, {state: user})
  }


}
