// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const Greeter = await hre.ethers.getContractFactory("Greeter");
  const Target = await hre.ethers.getContractFactory("Privacy");
  const target = await Target.deploy();

  await target.deployed();

  console.log("Target deployed to:", target.address);

  // const Attacker = await hre.ethers.getContractFactory("Exo10");
  // const attacker = await Attacker.deploy(target.address);

  // await attacker.deployed();

  // console.log("Attacker deployed to:", attacker.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
