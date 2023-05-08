// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

/******************************************************************************\
* @author The VSC Team
* @title VSC COIN smart contract
/******************************************************************************/

import { ERC20Upgradeable } from "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import { Initializable } from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import { UUPSUpgradeable } from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract VSCCoin is Initializable, ERC20Upgradeable, UUPSUpgradeable {
    /**
     * @dev replaces the constructor method
     * @param name description of the token
     * @param symbol symbol of the token
     * @param _supply total supply of the token
     */
    function initialize(string memory name, string memory symbol, uint256 _supply) external initializer {
        __ERC20_init(name, symbol);
        __UUPSUpgradeable_init();
        _mint(msg.sender, _supply * 10 ** 18);
    }

    /**
     * @dev Mint 100 token to the caller
     */
    function mint() external {
        _mint(msg.sender, 100 * 10 ** 18);
    }

    /**
     * @dev Used by UUPS Upgradability pattern to include access restriction
     * to the upgrade mechanism
     */
    function _authorizeUpgrade(address) internal view override {}
}
