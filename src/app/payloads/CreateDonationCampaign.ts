
export class CreateDonationCampaignPayload {

    constructor(
        private title: string,
        private description: string,
        private wallpaper: string,
        private beneficiary: string
    ){}

    public static createCreateDonationCampaignPayload(title: string, description: string, wallpaper: string, beneficiary: string) {
        return new CreateDonationCampaignPayload(
            title,
            description,
            wallpaper,
            beneficiary
        )
    }
}