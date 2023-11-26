

export class LogoutPayload {

    constructor(
        private sessionToken: string
    ){}

    public static createLogoutPayload(sessionToken: string){
        return new LogoutPayload(sessionToken)
    }
}