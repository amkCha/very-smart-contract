// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.17;

import "./Bounty.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

contract BountyFactory {
    address public immutable encryptionVerifier;
    address public immutable bountyTemplate;
    address[] public bounties;
    uint public bountyCount;
    address public vscAddress;

    event BountyCreated(address indexed bounty);

    constructor(address _encryptionVerifier, address _vscAddress) {
        encryptionVerifier = _encryptionVerifier;
        vscAddress = _vscAddress;
        bountyTemplate = address(new Bounty());
    }

    function createBounty(
        string memory _name,
        string memory _description,
        bytes[] memory _dataCIDs,
        uint[] memory _labels,
        uint _accuracyThreshold
    ) public payable returns (address) {
        require(msg.value > 0, "BountyFactory: must send more than 0 wei to create bounty");
        address clone = Clones.clone(bountyTemplate);
        Bounty(clone).initialize{ value: msg.value }(
            _name,
            _description,
            _dataCIDs,
            _labels,
            _accuracyThreshold,
            encryptionVerifier,
            vscAddress
        );
        bounties.push(clone);
        emit BountyCreated(clone);
        bountyCount++;
        return clone;
    }
}
