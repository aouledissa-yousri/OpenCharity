import { ethers } from "ethers";
import { BLOCKCHAIN_URL } from "../global";


export class ContractHelper {

    
    public static getContract(contractAddress: string, abi: ethers.Interface | ethers.InterfaceAbi){
        return new ethers.Contract(contractAddress, abi, new ethers.JsonRpcProvider(BLOCKCHAIN_URL))
    }

    public static async getContractTransactionProvider(contractAddress: string, abi: ethers.Interface | ethers.InterfaceAbi, userWalletAddress: string){
        return new ethers.Contract(
            contractAddress, 
            abi, 
            await new ethers.BrowserProvider((window as any).ethereum).getSigner()
        )
        

    }
}