import * as React from "react";
import { useAccount, useContractEvent, useContractRead } from "wagmi";
import Typography from "@mui/material/Typography";
import bountyAbi from "../assets/Bounty.json";
import SubmitBounty from "./steps/1.SubmitBounty";
import ApproveBounty from "./steps/2.ApproveBounty";
import SubmitWeights from "./steps/3.SubmitWeights";
import ReceiveWeights from "./steps/4.ReceiveWeights";

export default function Bounty(props) {
  const { address } = useAccount();

  const { data: completedStep } = useContractRead({
    address: props.bounty.address,
    abi: bountyAbi.abi,
    functionName: "completedStep"
  });

  const [step, setStep] = React.useState(completedStep?.toNumber());

  useContractEvent({
    address: props.bounty.address,
    abi: bountyAbi.abi,
    eventName: "BountyUpdated",
    async listener(node, event) {
      setStep(event.args[0]?.toNumber());
    }
  });

  return (
    <div>
      <Typography variant="h3" component="div">
        {props.bounty.name}
      </Typography>
      <Typography variant="h4" component="div" color="text.secondary">
        Reward: {props.bounty.reward.formatted} ETH
      </Typography>
      <Typography variant="h5" component="div" color="text.secondary">
        Accuracy required: {props.bounty.accuracyThreshold.toString()}%
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {props.bounty.description}
      </Typography>
      <br />
      {step === 1 && (<div>
        {address === props.bounty.owner &&
          <Typography variant="h4" color="text.primary">Waiting for submission...</Typography>}
        {address !== props.bounty.owner && <SubmitBounty bounty={props.bounty} />}
      </div>)}
      {step === 2 && (<div>
        {address === props.bounty.bountyHunter ?
          <Typography variant="h4" color="text.primary">Thanks for your submission. Waiting for
            approval...</Typography> : <ApproveBounty bounty={props.bounty} />}
      </div>)}
      {step === 3 && (<div>
        {address === props.bounty.bountyHunter ? <SubmitWeights bounty={props.bounty} /> :
          <Typography variant="h4" color="text.primary">Waiting for model weights...</Typography>}
      </div>)}
      {step === 4 && (<div>
        {address === props.bounty.owner && <ReceiveWeights bounty={props.bounty} />}
      </div>)}
    </div>
  );
}
