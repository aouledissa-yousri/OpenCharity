import { Component, OnInit } from '@angular/core';
import { UserManagementService } from 'src/app/services/UserManagementService/user-management.service';
import { UserStateInterface } from 'src/app/states/interfaces/UserStateInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

  constructor(
    private userManagementService: UserManagementService,
  ){}


  ngOnInit() {}

  
  public async connectWallet(){
    if( (window as any).ethereum ) (await this.userManagementService.connectWallet((window as any).ethereum))
    else console.log("metamask not available")
  }

  public async disconnectWallet(){
    this.userManagementService.disconnectWallet()
  }


}
