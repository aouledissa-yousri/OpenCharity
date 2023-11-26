import { Component, DoCheck } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserManagementService } from 'src/app/services/UserManagementService/user-management.service';
import { WalletService } from 'src/app/services/WalletService/wallet.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck {


  connected: boolean = false

  constructor(
    private userManagementService: UserManagementService,
    private walletService: WalletService,
    private router: Router
  ){}

  ngDoCheck(): void {
    this.connected = this.userManagementService.isConnected()
  }

  public isConnected(){
    return this.connected
  }

  public async disconnectWallet(){
    this.userManagementService.logout()
    this.connected = this.userManagementService.isConnected()
    this.router.navigate(["home"])
  }

  public async search(event: any){
    this.router.navigate(["search"])
  }

  public checkProfile(){
    this.router.navigate(["profile", this.walletService.getWalletAddress()])
  }

  public getUsername(){
    return JSON.parse(localStorage.getItem("userData") as string).username
  }

  public getProfilePic(){
    return JSON.parse(localStorage.getItem("userData") as string).profilePic
  }

  
}
