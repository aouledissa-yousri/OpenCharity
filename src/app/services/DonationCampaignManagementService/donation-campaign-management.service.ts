import { Injectable } from '@angular/core';
import { WalletService } from '../WalletService/wallet.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { API_URL } from 'src/app/global';
import { CreateDonationCampaignPayload } from 'src/app/payloads/CreateDonationCampaign';
import { UserManagementService } from '../UserManagementService/user-management.service';
import { DonationCampaign } from 'src/app/models/DonationCampaign';
import { UpdateDonationCampaignPayload } from 'src/app/payloads/UpdateDonationCampaignPayload';

@Injectable({
  providedIn: 'root'
})
export class DonationCampaignManagementService {

  constructor(
    private walletService: WalletService,
    private userManagementService: UserManagementService,
    private http: HttpClient
  ) { }


  public async getDonationCampaign(id: string){
    const donationCampaign = await firstValueFrom(this.http.get<any>(`${API_URL}/donationCampaigns/${id}`))

    return new DonationCampaign(
      donationCampaign.id,
      donationCampaign.title,
      donationCampaign.wallpaper,
      donationCampaign.description,
      donationCampaign.beneficiary,
      donationCampaign.donations,
      donationCampaign.openStatus,
      donationCampaign.dateCreated
    )
  }


  public async addDonationCampaign(title: string, wallpaper: string, description: string){
    await firstValueFrom(this.http.post(
      `${API_URL}/users/${this.walletService.getWalletAddress()}/donationCampaigns/`,
      CreateDonationCampaignPayload.createCreateDonationCampaignPayload(title, description, wallpaper, this.walletService.getWalletAddress())
    ))

    localStorage.setItem("userData", JSON.stringify(await this.userManagementService.getUser(this.walletService.getWalletAddress())))
  }

  public async updateDononationCampaign(donationCampaign: DonationCampaign){
    await firstValueFrom(
      this.http.patch(
        `${API_URL}/users/${donationCampaign.getBeneficiary()}/donationCampaigns/${donationCampaign.getId()}/`,
        UpdateDonationCampaignPayload.createUpdateDonationCampaignPayload(
          donationCampaign.getTitle(),
          donationCampaign.getDescription(),
          donationCampaign.getWallpaper(),
          donationCampaign.getOpenStatus()
        )
      )
    )

    localStorage.setItem("userData", JSON.stringify(await this.userManagementService.getUser(this.walletService.getWalletAddress())))
  }

  public async deleteDonationCampaign(donationCampaign: DonationCampaign){
    await firstValueFrom(
      this.http.delete(`${API_URL}/users/${donationCampaign.getBeneficiary()}/donationCampaigns/${donationCampaign.getId()}/`)
    )
    localStorage.setItem("userData", JSON.stringify(await this.userManagementService.getUser(this.walletService.getWalletAddress())))
  }
}
