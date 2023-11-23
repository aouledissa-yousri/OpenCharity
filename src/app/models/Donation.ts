

export class Donation{

    constructor(
        private id: string,
        private amount: number,
        private dateDonated: string,
        private donationCampaignId: string,
        private donor: string
    ){}

    public getId(){
        return this.id
    }

    public getAmount(){
        return this.amount
    }

    public getDateDonated(){
        return this.dateDonated
    }

    public getDonationCampaignId(){
        return this.donationCampaignId
    }

    public getDonor(){
        return this.donor
    }
}