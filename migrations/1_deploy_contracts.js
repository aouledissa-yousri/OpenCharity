const DonationContract = artifacts.require("DonationContract.sol"); // Import the contract artifact
const BalanceContract = artifacts.require("BalanceContract.sol"); // Import the contract artifact

module.exports = async (deployer) => {
  // Deployment steps
  const donationContract = await deployer.deploy(DonationContract); // Deploy the contract
  const balanceContract = await deployer.deploy(BalanceContract); // Deploy the contract

  console.log(`
  
    balanceContract: ${balanceContract.address}
    donationContract: ${donationContract}
  
  `)
}