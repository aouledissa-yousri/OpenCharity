import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagementService } from 'src/app/services/UserManagementService/user-management.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private userManagementService: UserManagementService,
    private router: Router
  ){}


  public isConnected(){
    return this.userManagementService.isConnected()
  }

  public async disconnectWallet(){
    this.userManagementService.logout()
  }

  public async search(event: any){
    this.router.navigate(["search"])
  }

}
