import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { firstValueFrom } from 'rxjs';
import { API_URL } from 'src/app/global';
import { User } from 'src/app/models/User';
import { LoginPayload } from 'src/app/payloads/LoginPayload';
import { SignUpPayload } from 'src/app/payloads/SignUpPayload';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private connected: boolean = false
  private walletAddress: string = ""
  private provider: ethers.BrowserProvider | undefined

  constructor(private http: HttpClient) { }

  public async connectWallet(ethereum: ethers.Eip1193Provider, network?: ethers.Networkish | undefined){
    this.provider = new ethers.BrowserProvider(ethereum)
    this.walletAddress = (await this.provider.send("eth_requestAccounts", []))[0]

    if((await this.getUser(this.walletAddress)).getWalletAddress() != "") this.http.post<any>(`${API_URL}/login/`, LoginPayload.createLoginPayload(this.walletAddress)).subscribe(data => {
      localStorage.setItem("token", data.sessionToken)
    })
  }

  public disconnectWallet(){
    this.connected = false
    this.walletAddress = ""
    this.provider = undefined
  }

  public createAccount(walletAddress: string, username: string, profilePic: string){
    return this.http.post(`${API_URL}/signUp/`, SignUpPayload.createSignUpPayload(walletAddress, username, profilePic))
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

}
