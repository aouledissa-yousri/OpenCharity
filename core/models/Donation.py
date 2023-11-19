import core.models.User as User
import core.models.DonationCampaign as DonationCampaign
from datetime import date

class Donation:

    def __init__(self, donor: User, donationCampaign: DonationCampaign, amount: int):
        self.__amount = amount
        self.__dateDonated = date.today()
        self.__donationCampaign = donationCampaign
        self.__donor = donor
    

    def getAmount(self):
        return self.__amount
    
    def getDateDonated(self):
        return self.__dateDonated
    
    def getDonationCampaign(self):
        return self.__donationCampaign
    
    def getDonor(self):
        return self.__donor
    
    def getData(self):
        return {
            "amount": self.getAmount(),
            "dateDonated": self.getDateDonated(),
            "donationCampaignId": self.getDonationCampaign(),
            "donor": self.getDonor()
        }
        