import { connectRPC } from "./rpc.client.js";
import { simulateVestingFlow } from "./vesting.simulator.js";
import {
  NETWORK,
  TOKEN_ADDRESS,
  BENEFICIARY_ADDRESS
} from "./network.config.js";

console.log("Token Vesting Management Platform");
console.log("Network:", NETWORK);
console.log("Token:", TOKEN_ADDRESS);
console.log("Beneficiary:", BENEFICIARY_ADDRESS);

const provider = connectRPC();
simulateVestingFlow(provider);
