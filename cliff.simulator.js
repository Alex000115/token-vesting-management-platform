export function simulateCliff(startTime, cliffDays) {
  const cliffTime = startTime + cliffDays * 24 * 60 * 60 * 1000;
  return {
    cliffReached: Date.now() >= cliffTime,
    cliffTime
  };
}
