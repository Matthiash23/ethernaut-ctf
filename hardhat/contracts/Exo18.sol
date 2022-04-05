// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract ExoEighteen {

    function whatsIsTheMeaningOfLife() public returns(uint) {
        assembly{
            mstore(0x0, 0x42)
            //o_code := mload(0x40)
            return(0x0, 32)
        }
    }
}