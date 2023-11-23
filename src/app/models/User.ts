import { DonationCampaignMapType } from "../types/DonationCampaignMapType";
import { DonationMapType } from "../types/DonationMapType";
import { Donation } from "./Donation";
import { DonationCampaign } from './DonationCampaign';


export class User {

    constructor(
        private walletAddress: string,
        private username: string,
        private profilePic: string,
        private donations: DonationMapType,
        private donationCampaigns: DonationCampaignMapType
    ){}


    public getWalletAddress(){
        return this.walletAddress
    }

    public getUsername(){
        return this.username
    }

    public getProfilePic(){
        return this.profilePic
    }

    public getDonations(){
        return this.donations
    }

    public getDonationCampaigns(){
        return this.donationCampaigns
    }



    public setUsername(username: string){
        this.username = username
    }

    public setProfilePic(profilePic: string){
        this.profilePic = profilePic
    }

    public addDonation(donation: Donation){
        this.donations[donation.getId()] = donation
    }

    public addDonationCampaign(donationCampaign: DonationCampaign){
        this.donationCampaigns[donationCampaign.getId()] = donationCampaign
    }
}