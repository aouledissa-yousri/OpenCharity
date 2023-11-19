from datetime import date
import core.models.User as User
import core.models.Donation as Donation

class DonationCampaign: 

    def __init__(self, id, title, description, beneficiary):
        self.__id = id,
        self.__title = title
        self.__description = description
        self.__beneficiary = beneficiary
        self.__donations = {}
        self.__openStatus = False
        self.__dateCreated = date.today()

    def getId(self):
        return self.__id
    
    def getTitle(self):
        return self.__title

    def getDescription(self):
        return self.__description
    
    def getBeneficiary(self):
        return self.__beneficiary
    
    def getDonations(self):
        return self.__donations
    
    def getOpenStatus(self):
        return self.__openStatus

    def getDateCreated(self):
        return self.__dateCreated

    def getData(self):
        return {
            "id": self.getId(),
            "title": self.getTitle(),
            "description": self.getDescription(),
            "beneficiary": self.getBeneficiary(),
            "donations": self.getDonations(),
            "openStatus": self.getOpenStatus(),
            "dateCreated": self.getDateCreated()
        }
    

    def setTitle(self, title: str):
        self.__title = title
    
    def setDescription(self, description: str):
        self.__description = description
    
    def setId(self, id: str):
        self.__id = id
    
    def addDonation(self, donor: User, donation: Donation):
        self.__donations[donor.getWalletAddress()] = donation

    def update(self, title: str = None, description: str = None):
        if title is not None:
            self.__title = title
        if description is not None:
            self.__description = description
    
