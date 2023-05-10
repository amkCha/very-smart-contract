const EncryptionVerifier = artifacts.require("EncryptionVerifier");
const BountyFactory = artifacts.require("BountyFactory");
const CircuitVerifier = artifacts.require("CircuitVerifier");

module.exports = async function (deployer) {
  await deployer.deploy(EncryptionVerifier);
  const instance = await EncryptionVerifier.deployed();
  await deployer.deploy(BountyFactory, instance.address);
  await deployer.deploy(CircuitVerifier);
};
