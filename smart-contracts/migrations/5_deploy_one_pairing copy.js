const EncryptionVerifier = artifacts.require("EncryptionVerifier");
const BountyFactory = artifacts.require("BountyFactory");
const CircuitVerifier = artifacts.require("CircuitVerifier");
const Pairing100 = artifacts.require("Pairing100");

module.exports = async function (deployer) {
  await deployer.deploy(Pairing100);
  const pairing100Add = await Pairing100.deployed();
  await deployer.deploy(EncryptionVerifier, pairing100Add.address);
  const instance = await EncryptionVerifier.deployed();
  await deployer.deploy(BountyFactory, instance.address);
  await deployer.deploy(CircuitVerifier);
};
