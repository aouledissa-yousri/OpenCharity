


export class DonationPayload {

    constructor(
        private donor: string,
        private donationCampaignId: string,
        private amount: number
    ){}

    public static createDonationPayload(donor: string, donationCampaignId: string, amount: number){
        return new DonationPayload(donor, donationCampaignId, amount)
    }
}