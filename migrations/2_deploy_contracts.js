const HeemToken = artifacts.require('HeemToken.sol');

module.exports = async function (deployer) {
await deployer.deploy(HeemToken);
const heemtokencontract = await HeemToken.deployed();
};