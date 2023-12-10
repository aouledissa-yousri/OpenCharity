import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { firstValueFrom } from 'rxjs';
import { API_URL } from 'src/app/global';
import { User } from 'src/app/models/User';
import { LoginPayload } from 'src/app/payloads/LoginPayload';
import { SignUpPayload } from 'src/app/payloads/SignUpPayload';
import { WalletService } from '../WalletService/wallet.service';
import { UpdateUserPayload } from 'src/app/payloads/UpdateUserPayload';
import { LogoutPayload } from 'src/app/payloads/LogoutPayload';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {


  constructor(
    private http: HttpClient,
    private walletService: WalletService
  ) {}

  public async login(ethereum: ethers.Eip1193Provider){

    await this.walletService.connectWallet(ethereum)
    const user = await this.getUser(this.walletService.getWalletAddress())

    if(user.getWalletAddress() !== ""){
      await this.walletService.sign()

      await firstValueFrom(this.http.post<any>(`${API_URL}/users/login/`, LoginPayload.createLoginPayload(
        this.walletService.getWalletAddress(),
        this.walletService.getSignature() as string
      )))

      localStorage.setItem("userData", JSON.stringify(user))

      return true
    }

    return false
  }

  public async logout(){
    const data = await firstValueFrom(this.http.delete(
      `${API_URL}/users/logout/`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        body: LogoutPayload.createLogoutPayload(this.walletService.getSignature() as string)
      }
    ))
    this.walletService.disconnectWallet()

  }

  public async createAccount(username: string, profilePic: string){
    const data =  await firstValueFrom(this.http.post(`${API_URL}/users/signUp/`, SignUpPayload.createSignUpPayload(this.walletService.getWalletAddress(), username, profilePic)))
    return data
  }

  public async getUser(walletAddress: string){
    const user: any = await firstValueFrom(this.http.get(`${API_URL}/users/${walletAddress}/`))

    return new User(
      user.walletAddress, 
      user.username,
      user.profilePic,
      user.donations,
      user.donationCampaigns
    )
  }

  public async getUsers(){
    const users = await firstValueFrom(this.http.get<any[]>(`${API_URL}/users/`))
    
    return users.map((user: any) => new User(
      user.walletAddress, 
      user.username,
      user.profilePic,
      user.donations,
      user.donationCampaigns
    ))
  }


  public isConnected(){
    return this.walletService.isConnected()
  }


  public async updateAccount(username: string, profilePic: string){
    const data = await firstValueFrom(this.http.patch(
      `${API_URL}/users/${this.walletService.getWalletAddress()}/`, 
      UpdateUserPayload.createUpdateUserPayload(this.walletService.getWalletAddress(), username, profilePic)
    ))

    localStorage.setItem("userData", JSON.stringify(data))

  }

}
