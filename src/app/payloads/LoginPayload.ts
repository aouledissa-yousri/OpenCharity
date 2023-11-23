

export class LoginPayload {
    
    constructor(
        private walletAddress: string
    ){}

    public static createLoginPayload(walletAddress: string){
        return new LoginPayload(walletAddress)
    }
}