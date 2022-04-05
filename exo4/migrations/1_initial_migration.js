const Migrations = artifacts.require("Migrations");
const Telephone = artifacts.require("Telephone");
const ExoFour = artifacts.require("ExoFour");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  
  deployer.deploy(ExoFour, "0x022D361846c63923Da3C182b206c3E34a9041c4F");
  
  
};
