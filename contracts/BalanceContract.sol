// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BalanceContract {
  constructor() public {}

  function getBalance(address walletAddress) external view returns(uint256){
    return walletAddress.balance;
  }
}
