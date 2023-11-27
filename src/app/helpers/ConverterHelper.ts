import { ethers } from "ethers";


export class ConverterHelper {

    public static convertWeiToEth(num: bigint): number {
        return parseFloat(ethers.formatEther(num))
    }

    public static convertEthToWei(num: number): bigint {
        return ethers.parseEther(num.toString())
    }
}