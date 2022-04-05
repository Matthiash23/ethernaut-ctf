const Web3 = require('web3');
const web3 = new Web3("https://rinkeby.infura.io/v3/8fa0de39a4b84dba8145373c9b4864d6");
const contractFunc = require('truffle-contract');
const FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

// let CoinFlip = require('./build/contracts/CoinFlip.json');
let Exo = require('./build/contracts/ExoThree.json');

// CoinFlip = contractFunc(CoinFlip)
// Exo = contractFunc(Exo)
// CoinFlip.setProvider(web3.currentProvider)
// CoinFlip.setProvider(web3.currentProvider)
let contract = new web3.eth.Contract(Exo.abi, "0xfeE3647dcE803732c2df9E2A5f7D9efDdBFC21b7")
console.log(contract)
contract.setProvider(web3.currentProvider)
async function callFunc(){
  let result = await contract.methods.win().call({from: "0xa5B99C2e24B91F760C4aE96d6C6c4B7038Cfd131"})
  console.log(result)
  let wins = await contract.methods.consecutiveWins().call()
  console.log(wins)
}
callFunc()
// let account = "";
// async function getAccounts(){

//   const accounts = await web3.eth.getAccounts()
//   account = accounts[0];
// }

// async function getBlocks(i=0) {
//   let currentBlock = await web3.eth.getBlock("latest");
//   let previousBlock = await web3.eth.getBlock(currentBlock.number - 1);
  
//   // let coinFlip = new web3.eth.Contract(CoinFlip);
//   let instance = await CoinFlip.deployed();
//   let coinFlip = parseInt(previousBlock.hash)/FACTOR;
//   let answer = coinFlip === 1;
//   let flip = await instance.flip(answer, {"from": account});
//   if(flip.receipt.status && i < 10){
//     i++;
//     console.log(i)
//     getBlocks(i)
//   };

// }

// getAccounts();
// getBlocks();