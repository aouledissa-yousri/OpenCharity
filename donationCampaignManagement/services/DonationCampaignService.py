from core.models import DonationCampaign
from helpers import IpfsHelper, StringHelper
from ipfsGateway.controllers import DonationCampaignIpfsGatewayController


class DonationCampaignService: 
    
    def getDonationCampaigns():
        pass

    def getDonationCampaign(id):
        pass
    

    def createDonationCampaign(data):
        donationCampaign = DonationCampaign(StringHelper.generateRandomString(), data["title"], data["description"], data["beneficiary"])
        DonationCampaignIpfsGatewayController.saveDonationCampaignIpfsRecord(donationCampaign.getId(), IpfsHelper.uploadData(donationCampaign.getData())["IpfsHash"])
        return donationCampaign.getData()

    
    def updateDonationCampaign(data, id):
        pass

    def deleteDonationCampaign(id):
        pass