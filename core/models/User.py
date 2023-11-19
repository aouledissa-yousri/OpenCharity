import core.models.Donation as Donation
import core.models.DonationCampaign as DonationCampaign

class User: 

    def __init__(self, walletAddress: str, username: str, profilePic: str):
        self.__walletAddress = walletAddress
        self.__username = username
        self.__profilePic = profilePic
        self.__donations = {}


    def getUsername(self):
        return self.__username
    
    def getProfilePic(self):
        return self.__profilePic

    def getWalletAddress(self):
        return self.__walletAddress
    
    def getDonations(self):
        return self.__donations

    def getData(self):
        return {
            "walletAddress": self.getWalletAddress(),
            "username": self.getUsername(),
            "profilePic": self.getProfilePic(),
            "donations": self.getDonations()
        }


    def setName(self, username: str):
        self.__username = username
    
    def setProfilePic(self, profilePic: str):
        self.__profilePic = profilePic
    
    def setWalletAddress(self, walletAddress: str):
        self.__walletAddress = walletAddress
    
    def addDonation(self, donation: Donation, donationCampaign: DonationCampaign):
        self.__donations[donationCampaign.getId()] = donation

    
    def update(self, username: str = None, profilePic: str = None, walletAddress: str = None):
        if username != self.getUsername():
            self.__username = username
        if profilePic != self.getProfilePic():
            self.__profilePic = profilePic
        if walletAddress != self.getWalletAddress(): 
            self.__walletAddress = walletAddress
    

