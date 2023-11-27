import { DonationMapType } from "../types/DonationMapType"
import { Donation } from "./Donation"



export class DonationCampaign {

    constructor(
        private id: string,
        private title: string,
        private wallpaper: string,
        private description: string,
        private beneficiary: string,
        private donations: DonationMapType,
        private openStatus: boolean,
        private dateCreated: string,
    ){}

    public getId(){
        return this.id
    }

    public getTitle(){
        return this.title
    }

    public getWallpaper(){
        return this.wallpaper
    }

    public getDescription(){
        return this.description
    }

    public getBeneficiary(){
        return this.beneficiary
    }

    public getDonations(){
        return this.donations
    }

    public getOpenStatus(){
        return this.openStatus
    }

    public getDateCreated(){
        return this.dateCreated
    }

    public setTitle(title: string){
        this.title = title
    }

    public setDescription(description: string){
        this.description = description
    }

    public setWallpaper(wallpaper: string){
        this.wallpaper = wallpaper
    }

    public addDonation(donation: Donation){
        this.donations[donation.getId()] = donation
    }

    public setOpenStatus(openStatus: boolean){
        this.openStatus = openStatus
    }

    public update(title?: string, description?: string, wallpaper?: string, openStatus?: boolean){
        if(title !== undefined) this.setTitle(title)
        if(description !== undefined) this.setDescription(description)
        if(wallpaper !== undefined) this.setWallpaper(wallpaper)
        if(openStatus !== undefined) this.setOpenStatus(openStatus)
    }

}