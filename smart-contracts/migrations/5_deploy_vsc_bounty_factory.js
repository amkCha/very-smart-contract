const BountyFactory = artifacts.require("BountyFactory");
const VSC = artifacts.require("VSC");

module.exports = async function (deployer) {
  await deployer.deploy(VSC);
  const vscInstance = await VSC.deployed();
  await deployer.deploy(BountyFactory, "0x940a8D7EEc5f88C36D0686Cd123Fb0C369FA3F1d", vscInstance.address);
};
