import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { ConverterHelper } from 'src/app/helpers/ConverterHelper';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private walletAddress: string = ""
  private balance: number = 0
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

  public async getBalance(ethereum: ethers.Eip1193Provider){
    if(this.provider === undefined) this.initProvider(ethereum)
    console.log("hello")
    return await this.provider?.getBalance(this.getWalletAddress())
    //console.log(await this.provider?.getBalance(this.getWalletAddress()))
  }

  public async initProvider(ethereum: ethers.Eip1193Provider){
    this.provider = new ethers.BrowserProvider(ethereum)
    this.signer = await this.provider.getSigner()
  }

  public async sign(){
    this.signature = await this.signer?.signMessage("Please sign in to your Ethereum wallet to connect to OpenCharity. This will allow you to access all the features of the app")
    localStorage.setItem("signature", this.signature as string)
  }

  public async connectWallet(ethereum: ethers.Eip1193Provider){
    this.initProvider(ethereum)
    this.walletAddress = (await this.provider?.send("eth_requestAccounts", []))[0]

    localStorage.setItem("walletAddress", this.walletAddress)

  }

  public disconnectWallet(){
    this.walletAddress = ""
    this.provider = undefined
    this.signer = undefined

    localStorage.removeItem("signature")
  }

  public isConnected(){
    return this.getSignature() !== null
  }
}
