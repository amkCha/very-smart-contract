// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.17;

contract PairingLast {

    struct G1Point {
        uint X;
        uint Y;
    }

    G1Point[6] public vk;

    constructor() {

        vk[0] = G1Point(
            753591038799143596501465994871794478010410947327974571148528957768253266557,
            19133326316177193676715715513949481761943512145445692809255783400361270511862
        );

        vk[1] = G1Point(
            20744899546338442536314141733271698486308282549096184473846493749354078388224,
            4296266412857756742059317568058584688284189539295482749514608463273525098549
        );

        vk[2] = G1Point(
            18226236009407355395043840129255719097063313226082147037867677763163875120405,
            10480138883576441496958501474305678339976728704402016351929843304239062870190
        );

        vk[3] = G1Point(
            6016937058970533393408421385433942222637329271011067359924898855046257306066,
            21798492581267253332996483281434717216343667863651530012929767232461027926817
        );

        vk[4] = G1Point(
            14397923115246358515482163360065372202753987754986190144191814556562824064782,
            7082562522891172147798139223080980137320210766135394997285006899994054366468
        );

        vk[5] = G1Point(
            10697108852644867098412544109976683532155204204159776614254134730959863833867,
            11994867655637815554743636701788514532539361892162110783826887964019001033958
        );

    }
}
