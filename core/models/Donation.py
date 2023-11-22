import core.models.User as User
from datetime import date

class Donation:

    def __init__(self, id, donor: User, donationCampaignId: str, amount: int):
        self.__id = id
        self.__amount = amount
        self.__dateDonated = date.today()
        self.__donationCampaign = donationCampaignId
        self.__donor = donor

    
    def getId(self):
        return self.__id

    def getAmount(self):
        return self.__amount
    
    def getDateDonated(self):
        return self.__dateDonated.isoformat()
    
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
        