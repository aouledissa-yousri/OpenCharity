import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SearchComponent } from './components/pages/search/search.component';
import { CreateAccountComponent } from './components/pages/create-account/create-account.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { CreateDonationCampaignComponent } from './components/pages/create-donation-campaign/create-donation-campaign.component';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { authGuard } from './guards/AuthGuard/auth.guard';
import { unAuthGuard } from './guards/UnAuthGuard/un-auth.guard';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { DonationCampaignComponent } from './components/pages/donation-campaign/donation-campaign.component';


const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "search", component: SearchComponent},
  { path: "login", component: LoginComponent, canActivate: [unAuthGuard]},
  { path: "create_account", component: CreateAccountComponent, canActivate: [unAuthGuard]},
  { path: "create_donation_campaign", component: CreateDonationCampaignComponent, canActivate: [authGuard]},
  { path: "notifications", component: NotificationsComponent, canActivate: [authGuard]},
  { path: "profile/:walletAddress", component: ProfileComponent},
  { path: "donation_campaign/:id", component: DonationCampaignComponent},
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
