const EncryptionVerifier = artifacts.require("EncryptionVerifier");
const VSC = artifacts.require("VSC");
const BountyFactory = artifacts.require("BountyFactory");
const CircuitVerifier = artifacts.require("CircuitVerifier");
const Pairing100 = artifacts.require("Pairing100");
const Pairing200 = artifacts.require("Pairing200");
const Pairing300 = artifacts.require("Pairing300");
const Pairing400 = artifacts.require("Pairing400");
const Pairing500 = artifacts.require("Pairing500");
const Pairing600 = artifacts.require("Pairing600");
const Pairing700 = artifacts.require("Pairing700");
const Pairing800 = artifacts.require("Pairing800");
const Pairing900 = artifacts.require("Pairing900");
const Pairing1000 = artifacts.require("Pairing1000");

module.exports = async function (deployer) {
  const pairings = [];
  await deployer.deploy(Pairing100);
  pairings.push(await Pairing100.deployed());
  await deployer.deploy(Pairing200);
  pairings.push(await Pairing200.deployed());
  await deployer.deploy(Pairing300);
  pairings.push(await Pairing300.deployed());
  await deployer.deploy(Pairing400);
  pairings.push(await Pairing400.deployed());
  await deployer.deploy(Pairing500);
  pairings.push(await Pairing500.deployed());
  await deployer.deploy(Pairing600);
  pairings.push(await Pairing600.deployed());
  await deployer.deploy(Pairing700);
  pairings.push(await Pairing700.deployed());
  await deployer.deploy(Pairing800);
  pairings.push(await Pairing800.deployed());
  await deployer.deploy(Pairing900);
  pairings.push(await Pairing900.deployed());
  await deployer.deploy(Pairing1000);
  pairings.push(await Pairing1000.deployed());

  await deployer.deploy(EncryptionVerifier, pairings);
  const encryptionVerifierInstance = await EncryptionVerifier.deployed();
  await deployer.deploy(VSC);
  const vscInstance = await VSC.deployed();
  await deployer.deploy(BountyFactory, encryptionVerifierInstance.address, vscInstance.address);
  await deployer.deploy(CircuitVerifier);
};
