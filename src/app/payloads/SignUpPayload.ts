

export class SignUpPayload {

    constructor(
        private walletAddress: string,
        private username: string,
        private profilePic: string
    ){}

    public static createSignUpPayload(walletAddress: string, username: string, profilePic: string){
        return new SignUpPayload(walletAddress, username, profilePic)
    }
}