from core.models import User, DonationCampaign
from helpers import IpfsHelper, DictionaryHelper
from ipfsGateway.controllers import UserIpfsGatewayController

class UserService:

    @staticmethod
    def getUser(walletAddress: str):
        return UserIpfsGatewayController.getUserIpfsData(walletAddress)

    @staticmethod
    def getUsers():
        return UserIpfsGatewayController.getAllUserIpfsData()

    @staticmethod
    def createUser(data):
        user = User(data["walletAddress"], data["username"], data["profilePic"])
        UserIpfsGatewayController.saveUserIpfsRecord(user.getWalletAddress(), IpfsHelper.uploadData(user.getData())["IpfsHash"])
        return user.getData()

    @staticmethod
    def updateUser(walletAddress: str, data):
        userData = UserIpfsGatewayController.getUserIpfsData(walletAddress)
        user = User(userData["walletAddress"], userData["username"], userData["profilePic"], userData["donations"], userData["donationCampaigns"])

        user.update(
            username=data["username"], 
            profilePic=data["profilePic"], 
            walletAddress=data["walletAddress"]
        )

        UserIpfsGatewayController.updateUserIpfsRecord(user.getWalletAddress(), IpfsHelper.uploadData(user.getData())["IpfsHash"])

        return user.getData()

    @staticmethod
    def addDonationCampaignToUser(walletAddress, donationCamapign: DonationCampaign):
        userData = UserIpfsGatewayController.getUserIpfsData(walletAddress)
        user = User(userData["walletAddress"], userData["username"], userData["profilePic"], userData["donations"], userData["donationCampaigns"])
        user.addDonationCampaign(donationCamapign)
        UserIpfsGatewayController.updateUserIpfsRecord(user.getWalletAddress(), IpfsHelper.uploadData(user.getData())["IpfsHash"])

        return user.getData()
    
    @staticmethod
    def removeDonationCampaignFromUser(walletAddress, donationCampaignId: str):
        userData = UserIpfsGatewayController.getUserIpfsData(walletAddress)
        user = User(userData["walletAddress"], userData["username"], userData["profilePic"], userData["donations"], userData["donationCampaigns"])
        user.removeDonationCampaign(donationCampaignId)
        UserIpfsGatewayController.updateUserIpfsRecord(user.getWalletAddress(), IpfsHelper.uploadData(user.getData())["IpfsHash"])

        return user.getData()
    
    @staticmethod
    def updateUserDonationCampaign(walletAddress, donationCamapign: DonationCampaign):
        userData = UserIpfsGatewayController.getUserIpfsData(walletAddress)
        user = User(userData["walletAddress"], userData["username"], userData["profilePic"], userData["donations"], userData["donationCampaigns"])
        user.updateDonationCampaign(donationCamapign)
        UserIpfsGatewayController.updateUserIpfsRecord(user.getWalletAddress(), IpfsHelper.uploadData(user.getData())["IpfsHash"])

        return user.getData()


    @staticmethod
    def login(data):
        pass