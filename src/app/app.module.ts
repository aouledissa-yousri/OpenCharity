import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';





import { HomeComponent } from './components/pages/home/home.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { DonationCampaignComponent } from './components/pages/donation-campaign/donation-campaign.component';
import { SearchComponent } from './components/pages/search/search.component';
import { CreateDonationCampaignComponent } from './components/pages/create-donation-campaign/create-donation-campaign.component'
import { DonateComponent } from './components/pages/donate/donate.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from  '@angular/common/http';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { CreateAccountComponent } from './components/pages/create-account/create-account.component';
import { DonationsComponent } from './components/pages/donations/donations.component';
import { NavbarComponent } from './components/base/navbar/navbar.component';
import { LoginComponent } from './components/pages/login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    DonationCampaignComponent,
    SearchComponent,
    DonateComponent,
    NotificationsComponent,
    CreateAccountComponent,
    CreateDonationCampaignComponent,
    DonationsComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
