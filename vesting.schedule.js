export function createVestingSchedule(totalAmount, startTime, durationInDays) {
  return {
    totalAmount,
    startTime,
    durationInDays,
    released: 0
  };
}
