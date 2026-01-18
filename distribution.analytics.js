export function getDistributionMetrics(records) {
  return {
    totalDistributions: records.length,
    lastUpdate: Date.now()
  };
}
