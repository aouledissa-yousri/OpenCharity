import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private walletAddress: string = ""
  private provider: ethers.BrowserProvider | undefined
  private signer: ethers.JsonRpcSigner | undefined
  private signature: string | undefined = ""

  constructor() { }

  public getWalletAddress(){
    if(this.walletAddress !== "") return this.walletAddress
    return localStorage.getItem("walletAddress") as string
  }

  public getSignature(){
    if(this.signature !== "") return this.signature
    return localStorage.getItem("signature") as string
  }

  public async sign(){
    this.signature = await this.signer?.signMessage("Please sign in to your Ethereum wallet to connect to OpenCharity. This will allow you to access all the features of the app")
    localStorage.setItem("signature", this.signature as string)
  }

  public async connectWallet(ethereum: ethers.Eip1193Provider){
    this.provider = new ethers.BrowserProvider(ethereum)
    this.walletAddress = (await this.provider.send("eth_requestAccounts", []))[0]
    this.signer = await this.provider.getSigner()

    localStorage.setItem("walletAddress", this.walletAddress)

  }

  public disconnectWallet(){
    this.walletAddress = ""
    this.provider = undefined
    this.signer = undefined

    localStorage.removeItem("signature")
  }
}
