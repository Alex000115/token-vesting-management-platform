export function trackBeneficiary(address, amount) {
  return {
    address,
    amount,
    timestamp: Date.now(),
    status: "tracked"
  };
}
