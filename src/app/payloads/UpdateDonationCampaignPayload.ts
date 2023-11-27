

export class UpdateDonationCampaignPayload {

    constructor(
        private title: string,
        private description: string, 
        private wallpaper: string,
        private openStatus: boolean
    ){}


    public static createUpdateDonationCampaignPayload(title: string, description: string, wallpaper: string, openStatus: boolean){
        return new UpdateDonationCampaignPayload(title, description, wallpaper, openStatus)
    }
}