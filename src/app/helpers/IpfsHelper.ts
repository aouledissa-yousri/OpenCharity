import axios from "axios";

export class IpfsHelper {

    private static readonly URL = "https://api.pinata.cloud"
    private static readonly JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4OGI1NmU1NC1hNzAxLTRhZGUtYmQwNS04NWMzMDM2ZTM2MGMiLCJlbWFpbCI6ImFvdWxlZGlzc2F5b3VzcmlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjY4ODc3YTc5OWYxZGRlNzQ0NDEzIiwic2NvcGVkS2V5U2VjcmV0IjoiYjM3OWFjZjA5NDg4ZGNlOTE2MzE4NTU4MzI1ZGVhZTU4ZmFjMzMyYmFmNDJhNWYyOTAwMmU3NzY0OWYxMjYyZCIsImlhdCI6MTcwMDk0NjIzN30.pCtBtwylai9CEtdueQSWfhm3dV9aPi7M_0YQhkxwkoA"
    private static readonly GATEWAY_URL = "https://orange-horizontal-squirrel-357.mypinata.cloud/ipfs/"

    public static async uploadFile(file: File) {
        const form = new FormData()
        form.append("file", file)
        form.append("name", file.name)

        const result = await axios.post(
            `${IpfsHelper.URL}/pinning/pinFileToIPFS`,
            form,
            {
                headers: {
                    accept: 'application/json',
                    authorization: `Bearer ${IpfsHelper.JWT}`
                }
            }
        )


        return `${IpfsHelper.GATEWAY_URL}/${(result.data as any).IpfsHash}`
    }

}