const Migrations = artifacts.require("Migrations");
const Exo10 = artifacts.require("Exo10");
const Reentrance = artifacts.require("Reentrance");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Reentrance);
};
