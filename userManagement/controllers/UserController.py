from ..services import UserService
from core.models import DonationCampaign, Donation

class UserController:

    @staticmethod
    def getUser(walletAddress: str):
        return UserService.getUser(walletAddress)

    @staticmethod
    def getUsers():
        return UserService.getUsers()

    @staticmethod
    def createUser(data):
        return UserService.createUser(data)

    @staticmethod
    def updateUser(walletAddress, data):
        return UserService.updateUser(walletAddress, data)

    @staticmethod
    def addDonationCampaignToUser(walletAddress, donationCamapign: DonationCampaign):
        return UserService.addDonationCampaignToUser(walletAddress, donationCamapign)
    
    @staticmethod
    def removeDonationCampaignFromUser(walletAddress, donationCampaignId: str):
        return UserService.removeDonationCampaignFromUser(walletAddress, donationCampaignId)

    @staticmethod
    def updateUserDonationCampaign(walletAddress, donationCampaign: DonationCampaign):
        return UserService.updateUserDonationCampaign(walletAddress, donationCampaign)
    
    @staticmethod
    def addDonationToUser(walletAddress: str, donation: Donation):
        return UserService.addDonationToUser(walletAddress, donation)

    @staticmethod
    def login(data):
        return UserService.login(data)

    @staticmethod
    def logout(data):
        return UserService.logout(data)
    
    