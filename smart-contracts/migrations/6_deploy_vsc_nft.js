const VSCDemo = artifacts.require("VSCDemo");

module.exports = async function (deployer) {
  await deployer.deploy(VSCDemo);
};
