import { Injectable } from '@angular/core';
import { WalletService } from '../WalletService/wallet.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { API_URL } from 'src/app/global';
import { CreateDonationCampaignPayload } from 'src/app/payloads/CreateDonationCampaign';
import { UserManagementService } from '../UserManagementService/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class DonationCampaignManagementService {

  constructor(
    private walletService: WalletService,
    private userManagementService: UserManagementService,
    private http: HttpClient
  ) { }


  public async addDonationCampaign(title: string, wallpaper: string, description: string){
    const donationCampaign = await firstValueFrom(this.http.post(
      `${API_URL}/users/${this.walletService.getWalletAddress()}/donationCampaigns/`,
      CreateDonationCampaignPayload.createCreateDonationCampaignPayload(title, description, wallpaper, this.walletService.getWalletAddress())
    ))

    localStorage.setItem("userData", JSON.stringify(await this.userManagementService.getUser(this.walletService.getWalletAddress())))
  }
}
