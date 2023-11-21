import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private connected: boolean = false
  private walletAddress: string = ""
  private provider: ethers.BrowserProvider | undefined

  constructor() { }

  public async connectWallet(ethereum: ethers.Eip1193Provider, network?: ethers.Networkish | undefined){
    this.provider = new ethers.BrowserProvider(ethereum)
    this.walletAddress = (await this.provider.send("eth_requestAccounts", []))[0]
    this.connected = true
  }
}
