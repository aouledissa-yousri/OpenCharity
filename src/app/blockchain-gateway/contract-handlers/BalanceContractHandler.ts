import { ContractHelper } from "src/app/helpers/ContactHelper";
import { contractAddresses } from "../contract-addresses";
import abi from "../contracts-abi/BalanceContract.json"
import { ConverterHelper } from "src/app/helpers/ConverterHelper";


export class BalanceContractHandler {


    public static async getBalance(walletAddress: string){
        const balanceContract = ContractHelper.getContract(
            contractAddresses.balanceContractAddress,
            abi
        )

        const balance = ConverterHelper.convertWeiToEth(await (balanceContract as any ).getBalance(walletAddress) as bigint)
        return balance
    }
}