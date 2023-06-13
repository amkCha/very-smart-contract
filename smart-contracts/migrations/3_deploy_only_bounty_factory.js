const BountyFactory = artifacts.require("BountyFactory");

module.exports = async function (deployer) {
  await deployer.deploy(BountyFactory, "0x166deB8177066388c51a46f720c45a429901053A");
};
