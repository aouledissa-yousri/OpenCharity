from sessionManagement.models import Session
from helpers import StringHelper
from ipfsGateway.controllers import UserIpfsGatewayController


class SessionService: 

    @staticmethod
    def addSession(walletAddress: str): 
        userIpfsRecord = UserIpfsGatewayController.getUserIpfsData(walletAddress)

        if userIpfsRecord["walletAddress"] == "":
            return {
                "code": 404,
                "message": "user not found"
            }
        
        else:
            session = Session(walletAddress = walletAddress, sessionToken=StringHelper.generateRandomString())
            session.save()
            return {
                "code": 200,
                "message": "connected",
                "sessionToken": session.sessionToken
            }

    
    @staticmethod
    def removeSession(sessionToken: str):
        Session.objects.filter(sessionToken=sessionToken).delete()

        return {
            "code": 200,
            "message": "logged out",
        }
        
        