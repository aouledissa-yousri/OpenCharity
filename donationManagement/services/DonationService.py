from core.models import Donation
from helpers import StringHelper, IpfsHelper
from donationCampaignManagement.controllers import DonationCampaignController
from userManagement.controllers import UserController
from ipfsGateway.controllers import DonationIpfsGatewayController

class DonationService:

    @staticmethod
    def addDonation(donationData: dict):
        donation = Donation(
            StringHelper.generateRandomString(), 
            donationData["donor"], 
            donationData["donationCampaignId"],
            donationData['amount']
        )

        DonationIpfsGatewayController.saveDonationIpfsRecord(
            donation.getId(),
            IpfsHelper.uploadData(donation.getData())["IpfsHash"]
        )

        DonationCampaignController.addDonationToCampaign(donation, donation.getDonationCampaign())
        UserController.addDonationToUser(donation.getDonor(), donation)

        return donation.getData()
        