from ..services import DonationCampaignService

class DonationCampaignController:


    @staticmethod
    def getDonationCampaigns():
        return DonationCampaignService.getDonationCampaigns() 

    @staticmethod
    def getDonationCampaign(id):
        return DonationCampaignService.getDonationCampaign(id)

    @staticmethod
    def createDonationCampaign(data):
        return DonationCampaignService.createDonationCampaign(data)
    
    @staticmethod
    def updateDonationCampaign(data, id):
        return DonationCampaignService.updateDonationCampaign(data, id)

    @staticmethod
    def deleteDonationCampaign(id):
        return DonationCampaignService.deleteDonationCampaign(id)

