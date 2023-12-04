
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public value;

    function increase() public {
        value++;
    }

    function decrease() public {
        value--;
    }
}