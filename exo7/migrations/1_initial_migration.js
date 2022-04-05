const Migrations = artifacts.require("Migrations");
const ExoSeven = artifacts.require("ExoSeven");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ExoSeven, "0x567044Aade934887DEB74F2EDca413A19375AD76");
};
