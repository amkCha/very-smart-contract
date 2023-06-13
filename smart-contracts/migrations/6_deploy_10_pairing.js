const EncryptionVerifier = artifacts.require("EncryptionVerifier");
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
// const PairingLast = artifacts.require("PairingLast");

module.exports = async function (deployer) {
  await deployer.deploy(Pairing100);
  const pairing100Add = await Pairing100.deployed();
  await deployer.deploy(Pairing200);
  const pairing200Add = await Pairing200.deployed();
  await deployer.deploy(Pairing300);
  const pairing300Add = await Pairing300.deployed();
  await deployer.deploy(Pairing400);
  const pairing400Add = await Pairing400.deployed();
  await deployer.deploy(Pairing500);
  const pairing500Add = await Pairing500.deployed();
  await deployer.deploy(Pairing600);
  const pairing600Add = await Pairing600.deployed();
  await deployer.deploy(Pairing700);
  const pairing700Add = await Pairing700.deployed();
  await deployer.deploy(Pairing800);
  const pairing800Add = await Pairing800.deployed();
  await deployer.deploy(Pairing900);
  const pairing900Add = await Pairing900.deployed();
  await deployer.deploy(Pairing1000);
  const pairing1000Add = await Pairing1000.deployed();
  // await deployer.deploy(PairingLast);
  // const pairinglastAdd = await PairingLast.deployed();
  // await deployer.deploy(EncryptionVerifier, pairing100Add.address, pairing200Add.address, pairing300Add.address, pairing400Add.address, pairing500Add.address, pairing600Add.address, pairing700Add.address, pairing800Add.address, pairing900Add.address, pairing1000Add.address);
  await deployer.deploy(EncryptionVerifier, pairing100Add.address, pairing200Add.address, pairing300Add.address, pairing400Add.address, pairing500Add.address, pairing600Add.address, pairing700Add.address, pairing800Add.address, pairing900Add.address, pairing1000Add.address);
  const instance = await EncryptionVerifier.deployed();
  await deployer.deploy(BountyFactory, instance.address);
  await deployer.deploy(CircuitVerifier);
};
