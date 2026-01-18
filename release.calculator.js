export function calculateRelease(schedule, currentTime) {
  const elapsedDays =
    (currentTime - schedule.startTime) / (24 * 60 * 60 * 1000);

  if (elapsedDays <= 0) return 0;

  const releasable =
    (schedule.totalAmount / schedule.durationInDays) * elapsedDays;

  return Math.min(releasable, schedule.totalAmount);
}
