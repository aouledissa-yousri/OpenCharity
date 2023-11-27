// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DonationContract {

    constructor() public {}

    function donateEther(address payable beneficiary, uint256 amount) external payable {
        require(address(this).balance >= amount, "Insufficient funds");

        beneficiary.transfer(amount);
    }
}