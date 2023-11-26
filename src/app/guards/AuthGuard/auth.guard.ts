import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserManagementService } from 'src/app/services/UserManagementService/user-management.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userManagementService = inject(UserManagementService)
  const router = inject(Router)


  if(userManagementService.isConnected()) return true
  
  router.navigateByUrl(router.url)
  return false
  
};
