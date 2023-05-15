// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.17;

contract VSC {

    address[] public NFTCreators;
    mapping(address => address[]) public NFTcreatorToCollections;

    function approveCollection(
        address collectionAddress
    ) public  {
        NFTcreatorToCollections[msg.sender].push(collectionAddress);
        NFTCreators.push(msg.sender);
    }
    
    function nbNFTCreators() public view returns(uint)  {
        return NFTCreators.length;
    }

}
