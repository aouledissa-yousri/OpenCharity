const DonationContract = artifacts.require("DonationContract.sol"); // Import the contract artifact

module.exports = function(deployer) {
  // Deployment steps
  deployer.deploy(DonationContract); // Deploy the contract
}