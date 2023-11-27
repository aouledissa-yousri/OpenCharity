import { ConverterHelper } from "src/app/helpers/ConverterHelper";
import { ContractHelper } from "src/app/helpers/ContactHelper";
import abi from "../contracts-abi/DonationContract.json"
import { contractAddresses } from "../contract-addresses";




export class DonationContractHandler {


    public static async donateEther(ether: number, recepient: string, sender: string){
        const amount = ConverterHelper.convertEthToWei(ether)

        const donationContract = await ContractHelper.getContractTransactionProvider(
            contractAddresses.donationContractAddress,
            abi,
            sender
        )

        await (donationContract as any).donateEther(recepient, amount, {value: amount})
    }
}