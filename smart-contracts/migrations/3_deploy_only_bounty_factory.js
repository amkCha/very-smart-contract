const BountyFactory = artifacts.require("BountyFactory");

module.exports = async function (deployer) {
  await deployer.deploy(BountyFactory, "0x7de9a176619bfE2AD08F4aE11BEE7f631B10a4Eb");
};
