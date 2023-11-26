// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DonationContract {

    function donateEther(address payable beneficiary, uint256 amount) public payable returns(bool) {
        require(address(this).balance >= amount, "Insufficient funds");

        (bool success,) = beneficiary.call{value: amount}("");
        require(success, "Transfer failed");
        return success;
    }
}