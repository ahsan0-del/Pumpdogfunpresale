// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PumpDogFun is ERC20, Ownable {
    uint256 public constant TOKEN_RATE = 1000; // 1 USDT = 1000 PDF
    address public constant USDT = 0x55d398326f99059fF775485246999027B3197955;
    uint256 public presaleEnd;
    mapping(address => uint256) public contributions;

    constructor() ERC20("PumpDogFun", "PDF") {
        _mint(msg.sender, 1_000_000_000 * 10**18); // 1B initial supply
        presaleEnd = block.timestamp + 7 days; // 7-day presale
    }

    function participate(uint256 usdtAmount) external {
        require(block.timestamp < presaleEnd, "Presale ended");
        require(usdtAmount >= 10 * 10**18, "Minimum 10 USDT");
        
        IERC20(USDT).transferFrom(msg.sender, owner(), usdtAmount);
        contributions[msg.sender] += usdtAmount;
    }

    function claimTokens() external {
        require(block.timestamp > presaleEnd, "Presale not ended");
        uint256 usdtAmount = contributions[msg.sender];
        require(usdtAmount > 0, "No contribution");
        
        uint256 tokens = usdtAmount * TOKEN_RATE;
        _transfer(owner(), msg.sender, tokens);
        contributions[msg.sender] = 0;
    }
}

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external;
}
