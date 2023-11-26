

export class UpdateUserPayload {

    constructor(
        private walletAddress: string,
        private username: string,
        private profilePic: string
    ){}

    public static createUpdateUserPayload(walletAddress: string, username: string, profilePic: string){
        return new UpdateUserPayload(walletAddress, username, profilePic)
    }
}