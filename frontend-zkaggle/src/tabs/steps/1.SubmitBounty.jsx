import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { useDebounce } from "use-debounce";
import bountyAbi from "../../assets/Bounty.json";
import circuitCalldata from "../../assets/circuitCalldata.json";

export default function SubmitBounty(props) {
  const [links, setLinks] = React.useState([]);
  const [zkey, setZkey] = React.useState("QmVMBwFdacBj4PtqwVSraSDHZUQAgpmTFTDa2DYh2pB6L4");
  const [circom, setCircom] = React.useState("QmSgPr6FktpWnR2MC67e3Ec72zoNEriquZVaemGHfS3v8d");
  const [verifier, setVerifier] = React.useState("QmYuPSkG3GPFtiuE6BL3fA3n5ad8uWP9YrQhFmsaZHGjkm");

  const [verifierAddress, setVerifierAddress] = React.useState("0x9FDBfF38be41aea18A6A83D06FeDFa4d4851Ba15");
  const [debounceVerifierAddress] = useDebounce(verifierAddress, 500);

  const [a, setA] = React.useState(circuitCalldata.a.toString());

  const [b, setB] = React.useState(circuitCalldata.b.toString());

  const [c, setC] = React.useState(circuitCalldata.c.toString());

  const [input, setInput] = React.useState(circuitCalldata.input.toString());

  let utf8Encode = new TextEncoder();

  const {
    config,
    error: prepareError,
    isError: isPrepareError
  } = usePrepareContractWrite({
    address: props.bounty.address,
    abi: bountyAbi.abi,
    functionName: "submitBounty",
    args: [
      utf8Encode.encode(zkey),
      utf8Encode.encode(circom),
      utf8Encode.encode(verifier),
      verifierAddress,
      a.split(","),
      [[b.split(",")[0], b.split(",")[1]], [b.split(",")[2], b.split(",")[3]]],
      c.split(","),
      input.split(","),
      {
        gasLimit: 1300000
      }
    ]
  });

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash
  });

  console.log("config", config);
  console.log("write", write);
  console.log("isPrepareError", isPrepareError);
  console.log("prepareError", prepareError);

  return (
    <div>
      <Typography
        variant="h4" color="text.primary">
        1. Download data
      </Typography>
      <div>
        <Button

          variant="contained"
          color="primary"
          onClick={() => loadCids()}
        >
          Fetch
        </Button>
      </div>
      <div>
        {links.map((link, index) => {
          return (
            <Button
              key={index}
              variant="outlined" color="secondary"
              href={link} target="_blank">
              Download file {index}
            </Button>
          );
        })}
      </div>
      <br />
      <Typography
        variant="h4" color="text.primary">
        2. Process task locally
      </Typography>
      <br />
      <div>
        <Typography
          variant="h4" color="text.primary">
          3. Upload circom, zkey, and verifier
        </Typography>
        <Typography
          variant="h6" color="text.secondary">
          Upload zkey file
        </Typography>
        <input onChange={e => uploadZkey(e)} type="file" />
        <Typography
          variant="h6" color="text.secondary">
          Upload circom file
        </Typography>
        <input onChange={e => uploadCircom(e)} type="file" />
        <Typography
          variant="h6" color="text.secondary">
          Upload verifier file
        </Typography>
        <input onChange={e => uploadVerifier(e)} type="file" />
      </div>
      <br />
      <Typography
        variant="h4" color="text.primary">
        4. Submit bounty
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
            id="verifier-address"
            label="Verifier Address"
            value={verifierAddress}
          />
        </div>
        <div>
          <TextField
            required
            id="a"
            label="a"
            value={a}
          />
        </div>
        <div>
          <TextField
            required
            id="b"
            label="b"
            value={b}
          />
        </div>
        <div>
          <TextField
            required
            id="c"
            label="c"
            value={c}
          />
        </div>
        <div>
          <TextField
            required
            id="input"
            label="input"
            value={input}
          />
        </div>
        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            write?.();
          }}>
          Submit
        </Button>
      </Box>
    </div>
  );
}
