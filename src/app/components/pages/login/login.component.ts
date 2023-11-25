import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagementService } from 'src/app/services/UserManagementService/user-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private userManagementService: UserManagementService,
    private router: Router
  ){}

  public async connectWallet(){
    if( (window as any).ethereum ) {
      if((await this.userManagementService.login((window as any).ethereum))) this.router.navigate(["home"])
      else this.router.navigate(["create_account"])

    }
    
  }

}
