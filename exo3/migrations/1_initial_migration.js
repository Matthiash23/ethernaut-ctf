// const CoinFlip = artifacts.require("CoinFlip");
const Migrations = artifacts.require("Migrations");
const ExoThree = artifacts.require("ExoThree");
let gameAddress = "";

module.exports = function (deployer, accounts) {
  deployer.deploy(Migrations)
  deployer.deploy(ExoThree, "0xa6cf84146D3ff8C41CfDfdEdD9F8Fe716562139e", {from: "0xa5B99C2e24B91F760C4aE96d6C6c4B7038Cfd131"})
  // deployer.deploy(CoinFlip)
  // .then(() => {
  //   gameAddress = CoinFlip.address
  //   return deployer.deploy(ExoThree, gameAddress)
  // });
  // console.log('address' + gameAddress)
  
};
