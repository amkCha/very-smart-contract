import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { useContractRead, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";
import { ethers } from "ethers";
import bountyAbi from "../../assets/Bounty.json";
import keys from "../../assets/keys.json";

export default function ApproveBounty(props) {
    console.log("we are in approve bounty")
    const urlPrefix = "https://gateway.lighthouse.storage/ipfs/";
    const decoder = new TextDecoder();

    const [privKey, setPrivKey] = React.useState("");
    const [pubKey, setPubKey] = React.useState("");

    console.log("useState", privKey)
    console.log("useState", pubKey)

    const { data: zkeyCID } = useContractRead({
        address: props.bounty.address,
        abi: bountyAbi.abi,
        functionName: "zkeyCID",
    });

    console.log("useContractRead", zkeyCID)

    const { data: circomCID } = useContractRead({
        address: props.bounty.address,
        abi: bountyAbi.abi,
        functionName: "circomCID",
    });

    console.log("useContractRead2", circomCID)

    const { data: verifierCID } = useContractRead({
        address: props.bounty.address,
        abi: bountyAbi.abi,
        functionName: "verifierCID",
    });

    console.log("useContractRead3", verifierCID)

    const generateKeys = async () => {
        setPrivKey(keys[1].private_key);
        setPubKey(keys[1].public_key.join('\n'));
    }

    console.log("gen")

    const {
        config,
        error: prepareError,
        isError: isPrepareError,
    } = usePrepareContractWrite({
        address: props.bounty.address,
        abi: bountyAbi.abi,
        functionName: "releaseBounty",
        args: [
            keys[1].public_key,
        ],
    });


    console.log("usePrepareContractWrite", keys[1].public_key)

    const { data, error, isError, write } = useContractWrite(config);

    console.log("useContractWrite", data)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    console.log("end", data?.hash)

    return (
        <div>
            <Typography variant="h4" color="text.primary">
                You got a submission!
            </Typography>
            <Typography variant="h4" color="text.primary">
                1. Download files and verify locally
            </Typography>
            <div>
                <Button
                    variant="outlined" color="secondary"
                    href={urlPrefix + decoder.decode(ethers.utils.arrayify(zkeyCID))}
                    target="_blank">
                    Download zkey
                </Button>
                <Button
                    variant="outlined" color="secondary"
                    href={urlPrefix + decoder.decode(ethers.utils.arrayify(circomCID))}
                    target="_blank">
                    Download circom
                </Button>
                <Button
                    variant="outlined" color="secondary"
                    href={urlPrefix + decoder.decode(ethers.utils.arrayify(verifierCID))}
                    target="_blank">
                    Download verifier
                </Button>
            </div>
            <br />
            <Typography variant="h4" color="text.primary">
                2. Generate ECDH keys
            </Typography>

            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "60vw" }
                }}
                noValidate
                autoComplete="off"
                textAlign="center"
            >
                <div>
                    <TextField
                        required
                        id="private-key"
                        label="Private key"
                        value={privKey}
                        disabled
                    />
                    <TextField
                        required
                        multiline
                        id="public-keys"
                        label="Public keys"
                        value={pubKey}
                        disabled
                    />
                </div>
                <Button
                    variant="contained"
                    onClick={generateKeys}
                >
                    Generate
                </Button>
            </Box>
            <br />
            <Typography variant="h4" color="text.primary">
                3. Approve and release bounty
            </Typography>
                <Button
                    variant="contained"
                    disabled={isPrepareError || isLoading || privKey === ""}
                    onClick={(e) => {
                        e.preventDefault();
                        write?.();
                    }}
                    >
                    Approve
                </Button>
                {(isPrepareError || isError) && <Alert severity="error">{(prepareError || error)?.message.split(", method")[0]}</Alert>}
                {isLoading && <Alert severity="info">Waiting for transaction to be mined...</Alert>}
                {isSuccess && <Alert severity="success">Transaction mined!</Alert>}
        </div >
    )
}