import { Component } from '@angular/core';
import { UserManagementService } from 'src/app/services/UserManagementService/user-management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor(
    private userManagementService: UserManagementService
  ){}

  public async connectWallet(){
    if( (window as any).ethereum ) this.userManagementService.connectWallet((window as any).ethereum)
    else console.log("metamask not available")
  }

}
