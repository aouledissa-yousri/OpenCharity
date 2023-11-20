from ..models import DonationCampaignIpfsGateway

class DonationCampaignIpfsGatewayService:
    
    @staticmethod
    def saveDonationCampaignIpfsRecord(id, cid):
        donationIpfsGateway = DonationCampaignIpfsGateway(id=id, cid=cid)
        donationIpfsGateway.save()
        return True

    @staticmethod
    def deleteDonationCampaignIpfsRecord():
        pass

    @staticmethod
    def updateDonationCampaignIpfsRecord():
        pass

    @staticmethod
    def getDonationCampaignIpfsRecord():
        pass