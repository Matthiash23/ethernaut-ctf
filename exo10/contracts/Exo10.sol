pragma solidity ^0.6.12;
import './Reentrance.sol';

contract ExoSeven {

  Reentrance reentrance;

  constructor(address payable _targetContract) public payable{
    reentrance =  Reentrance(_targetContract);
  }

  function execute() public {
    address(reentrance).call{value: 100, gas: 100000}(abi.encodeWithSignature("donate(address)", msg.sender));
  }

}  