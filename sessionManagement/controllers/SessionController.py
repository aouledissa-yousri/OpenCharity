from ..services import SessionService

class SessionController:

    @staticmethod
    def addSession(walletAddress: str):
        return SessionService.addSession(walletAddress)
    
    @staticmethod
    def removeSession(sessionToken: str):
        return SessionService.removeSession(sessionToken)