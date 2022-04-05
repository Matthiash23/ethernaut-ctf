// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ExoSeven {

  address targetContract;
  uint256 public balance;
  event Received(address, uint);

  constructor(address _targetContract) public {
    targetContract = _targetContract;
  }

  function execute() public payable{
    selfdestruct(payable(targetContract));
  }
  
  
  receive() external payable {
      emit Received(msg.sender, msg.value);
  }
}
