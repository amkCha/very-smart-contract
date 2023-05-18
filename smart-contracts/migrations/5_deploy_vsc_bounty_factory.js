const BountyFactory = artifacts.require("BountyFactory");
const VSC = artifacts.require("VSC");

module.exports = async function (deployer) {
  await deployer.deploy(VSC);
  const vscInstance = await VSC.deployed();
  await deployer.deploy(BountyFactory, "0x7de9a176619bfE2AD08F4aE11BEE7f631B10a4Eb", vscInstance.address);
};
