const Counter = artifacts.require('MyContract');

module.exports = (deployer) => {
  deployer.deploy(MyContract());
};
