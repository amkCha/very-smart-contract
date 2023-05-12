const BountyFactory = artifacts.require("BountyFactory");

module.exports = async function (deployer) {
  await deployer.deploy(BountyFactory, "0xBdFAD95BBDbA9Fb0808050b729093a721D456c24");
};
