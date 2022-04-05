pragma solidity >=0.4.22 <0.9.0;

contract Exo12 {
    bytes16 public ans;

    constructor(bytes32 _array) public {
        ans = bytes16(_array);
    }
}