from core.models import User
from helpers import IpfsHelper
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
        user = User(userData["walletAddress"], userData["username"], userData["profilePic"])
        user.update(username=data["username"], profilePic=data["profilePic"], walletAddress=data["walletAddress"])

        UserIpfsGatewayController.updateUserIpfsRecord(user.getWalletAddress(), IpfsHelper.uploadData(user.getData())["IpfsHash"])

        return user.getData()

    @staticmethod
    def login(data):
        pass