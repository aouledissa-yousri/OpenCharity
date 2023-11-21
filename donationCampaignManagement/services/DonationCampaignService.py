from core.models import DonationCampaign
from helpers import IpfsHelper, StringHelper
from ipfsGateway.controllers import DonationCampaignIpfsGatewayController


class DonationCampaignService: 
    
    def getDonationCampaigns():
        return DonationCampaignIpfsGatewayController.getDonationCampaignsIpfsRecord()

    def getDonationCampaign(id):
        return DonationCampaignIpfsGatewayController.getDonationCampaignIpfsRecord(id)
    

    def createDonationCampaign(data):
        donationCampaign = DonationCampaign(StringHelper.generateRandomString(), data["title"], data["description"], data["beneficiary"])
        DonationCampaignIpfsGatewayController.saveDonationCampaignIpfsRecord(donationCampaign.getId(), IpfsHelper.uploadData(donationCampaign.getData())["IpfsHash"])
        return donationCampaign.getData()

    
    def updateDonationCampaign(data, id):
        donationCampaignData = DonationCampaignIpfsGatewayController.getDonationCampaignIpfsRecord(id)
        donationCampaign = DonationCampaign(
            donationCampaignData["id"],
            donationCampaignData["title"],
            donationCampaignData["description"],
            donationCampaignData["beneficiary"],
            donationCampaignData["donations"],
            donationCampaignData["openStatus"]
        )
        donationCampaign.update(data["title"], data["description"], data["openStatus"])

        DonationCampaignIpfsGatewayController.updateDonationCampaignIpfsRecord(id, IpfsHelper.uploadData(donationCampaign.getData())["IpfsHash"])
        return donationCampaign.getData()

    def deleteDonationCampaign(id):
        return DonationCampaignIpfsGatewayController.deleteDonationCampaignIpfsRecord(id)