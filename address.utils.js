import { getAddress } from "ethers";
import {
  TOKEN_ADDRESS,
  BENEFICIARY_ADDRESS
} from "./network.config.js";

export function isTargetToken(address) {
  if (!address) return false;
  try {
    return (
      getAddress(address).toLowerCase() ===
      getAddress(TOKEN_ADDRESS).toLowerCase()
    );
  } catch {
    return false;
  }
}

export function isBeneficiary(address) {
  if (!address) return false;
  try {
    return (
      getAddress(address).toLowerCase() ===
      getAddress(BENEFICIARY_ADDRESS).toLowerCase()
    );
  } catch {
    return false;
  }
}
