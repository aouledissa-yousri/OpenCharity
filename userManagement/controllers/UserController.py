from ..services import UserService

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
    def login(data):
        pass