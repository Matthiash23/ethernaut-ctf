
const ExoThree = artifacts.require("ExoThree");
let gameAddress = "";
let numWins = 0;

async function win_game(numWins, exoThree){
    let result = await exoThree.win({from: "0xa5B99C2e24B91F760C4aE96d6C6c4B7038Cfd131"})
    if(result && numWins <= 10){
        console.log(numWins)
        numWins++
        await win_game(numWins)
    }
}
module.exports = async function (deployer, accounts) {
    let exoThree = await ExoThree.deployed()
    await win_game(numWins, exoThree)
    console.log(x)
    
  // deployer.deploy(CoinFlip)
  // .then(() => {
  //   gameAddress = CoinFlip.address
  //   return deployer.deploy(ExoThree, gameAddress)
  // });
  // console.log('address' + gameAddress)
  
};