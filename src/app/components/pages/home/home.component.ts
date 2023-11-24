import { Component, OnInit } from '@angular/core';
import { UserManagementService } from 'src/app/services/UserManagementService/user-management.service';

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
    if( (window as any).ethereum ) {
      console.log(await this.userManagementService.connectWallet((window as any).ethereum))

    }
    
  }

  public async disconnectWallet(){
    this.userManagementService.disconnectWallet()
  }


}
