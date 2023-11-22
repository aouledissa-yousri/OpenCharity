from ..services import DonationCampaignService
from core.models import Donation

class DonationCampaignController:


    @staticmethod
    def getDonationCampaigns():
        return DonationCampaignService.getDonationCampaigns() 

    @staticmethod
    def getDonationCampaign(id: str):
        return DonationCampaignService.getDonationCampaign(id)

    @staticmethod
    def createDonationCampaign(data):
        return DonationCampaignService.createDonationCampaign(data)
    
    @staticmethod
    def updateDonationCampaign(data, id: str):
        return DonationCampaignService.updateDonationCampaign(data, id)

    @staticmethod
    def deleteDonationCampaign(id: str):
        return DonationCampaignService.deleteDonationCampaign(id)

    @staticmethod
    def addDonationToCampaign(donation: Donation, id: str):
        return DonationCampaignService.addDonationToCampaign(donation, id)

