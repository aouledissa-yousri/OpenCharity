import { DonationCampaignMapType } from "src/app/types/DonationCampaignMapType";
import { DonationMapType } from "src/app/types/DonationMapType";

export interface UserStateInterface {
    walletAddress: string,
    username: string,
    profilePic: string,
    donations: DonationMapType,
    donationCampaigns: DonationCampaignMapType
}