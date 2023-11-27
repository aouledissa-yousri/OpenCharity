import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DonationContractHandler } from 'src/app/blockchain-gateway/contract-handlers/DonationContractHandler';
import { API_URL } from 'src/app/global';
import { DonationPayload } from 'src/app/payloads/DonatePayload';
import { UserManagementService } from '../UserManagementService/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class DonationManagementService {

  constructor(
    private userManagementService: UserManagementService,
    private http: HttpClient
  ) { }


  public async donate(id: string, amount: number, recepient: string, sender: string){
    await DonationContractHandler.donateEther(amount, recepient, sender)
    const result = await firstValueFrom(
      this.http.post(
        `${API_URL}/users/${recepient}/donationCampaigns/${id}/donations/`,
        DonationPayload.createDonationPayload(sender, id, amount)
      )
    )

    localStorage.setItem("userData", JSON.stringify(await this.userManagementService.getUser(sender)))
    return result
  }
}
