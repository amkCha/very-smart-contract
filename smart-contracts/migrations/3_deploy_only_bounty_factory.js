const BountyFactory = artifacts.require("BountyFactory");

module.exports = async function (deployer) {
  await deployer.deploy(BountyFactory, "0xbA595EB5b4B18dD34AA8C8e0E2d4AD46d1367f03");
};
