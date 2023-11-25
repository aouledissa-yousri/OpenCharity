import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { firstValueFrom } from 'rxjs';
import { API_URL } from 'src/app/global';
import { User } from 'src/app/models/User';
import { LoginPayload } from 'src/app/payloads/LoginPayload';
import { SignUpPayload } from 'src/app/payloads/SignUpPayload';
import { WalletService } from '../WalletService/wallet.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private connected: boolean = false
  private userData: User = new User("", "", "", {}, {})

  constructor(
    private http: HttpClient,
    private walletService: WalletService
  ) {}

  public async login(ethereum: ethers.Eip1193Provider){

    await this.walletService.connectWallet(ethereum)
    console.log(this.walletService.getWalletAddress())
    

    if((await this.getUser(this.walletService.getWalletAddress())).getWalletAddress() != ""){
      const data = await firstValueFrom(this.http.post<any>(`${API_URL}/users/login/`, LoginPayload.createLoginPayload(
        this.walletService.getWalletAddress(),
        this.walletService.getSignature() as string
      )))

      this.walletService.sign()
      this.connected = true
    }

    return this.connected
  }

  public logout(){
    this.connected = false
    this.walletService.disconnectWallet()
  }

  public async createAccount(username: string, profilePic: string){
    const data =  await firstValueFrom(this.http.post(`${API_URL}/users/signUp/`, SignUpPayload.createSignUpPayload(this.walletService.getWalletAddress(), username, profilePic)))
    console.log(data)
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


  public isConnected(){
    return this.connected
  }

}
