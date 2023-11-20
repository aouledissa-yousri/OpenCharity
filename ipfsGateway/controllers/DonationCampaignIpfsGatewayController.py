from ..services import DonationCampaignIpfsGatewayService

class DonationCampaignIpfsGatewayController:
    
    @staticmethod
    def saveDonationCampaignIpfsRecord(id, cid):
        return DonationCampaignIpfsGatewayService.saveDonationCampaignIpfsRecord(id, cid)

    @staticmethod
    def deleteDonationCampaignIpfsRecord():
        pass

    @staticmethod
    def updateDonationCampaignIpfsRecord():
        pass

    @staticmethod
    def getDonationCampaignIpfsRecord():
        pass