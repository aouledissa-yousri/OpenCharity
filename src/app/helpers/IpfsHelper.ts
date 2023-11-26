import axios from "axios";

export class IpfsHelper {

    private static readonly URL = "https://api.pinata.cloud"
    private static readonly JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1YzczNjY3Ny0yNWQ3LTQzM2EtYjMyNS0yNDhiOTIxM2RhMzYiLCJlbWFpbCI6ImFja2VybWFubGV2aTE4M0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiOGU4YmRmMTczYmJjYTNhMjNjMjQiLCJzY29wZWRLZXlTZWNyZXQiOiI5NTM4YTBkZmIwNjAyMjg4ZGI0ZjZkYTAyYWUyYjcxOGRhN2JmMjEyMjNiYmI2YjczNjc4ZDUwZWM3ZWRkYjQ3IiwiaWF0IjoxNzAxMDM1MDE3fQ._obpg_mZNhoNEMqyLZ3egmq9t0iuDjwZbbM-GMJ9Tb4"
    private static readonly GATEWAY_URL = "https://green-genetic-coyote-962.mypinata.cloud/ipfs"

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