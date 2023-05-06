const VSCCoin = artifacts.require("VSCCoin");

module.exports = async function (deployer) {
  await deployer.deploy(VSCCoin);
};
