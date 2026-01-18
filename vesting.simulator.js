import { createVestingSchedule } from "./vesting.schedule.js";
import { simulateCliff } from "./cliff.simulator.js";
import { calculateRelease } from "./release.calculator.js";

export function simulateVestingFlow() {
  console.log("Simulating token vesting flow...");

  const startTime = Date.now() - 10 * 24 * 60 * 60 * 1000;
  const schedule = createVestingSchedule(100000, startTime, 180);

  const cliff = simulateCliff(startTime, 30);
  const released = calculateRelease(schedule, Date.now());

  console.log("Cliff Reached:", cliff.cliffReached);
  console.log("Total Tokens:", schedule.totalAmount);
  console.log("Released Tokens:", Math.floor(released));
}
