

export class LoginPayload {
    
    constructor(
        private walletAddress: string,
        private signature: string
    ){}

    public static createLoginPayload(walletAddress: string, signature: string){
        return new LoginPayload(walletAddress, signature)
    }
}