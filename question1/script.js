const mechanicHours = 50;

const vehicles = [
  { taskId: "1", duration: 8, impact: 5 },
  { taskId: "2", duration: 7, impact: 10 },
  { taskId: "3", duration: 1, impact: 8 },
  { taskId: "4", duration: 5, impact: 8 },
  { taskId: "5", duration: 8, impact: 8 },
  { taskId: "6", duration: 7, impact: 8 }
];

const n = vehicles.length;

const dp = Array(n + 1)
  .fill()
  .map(() => Array(mechanicHours + 1).fill(0));

for (let i = 1; i <= n; i++) {
  const vehicle = vehicles[i - 1];

  for (let h = 0; h <= mechanicHours; h++) {
    if (vehicle.duration <= h) {
      dp[i][h] = Math.max(
        dp[i - 1][h],
        dp[i - 1][h - vehicle.duration] + vehicle.impact
      );
    } else {
      dp[i][h] = dp[i - 1][h];
    }
  }
}

let h = mechanicHours;
const selected = [];

for (let i = n; i > 0; i--) {
  if (dp[i][h] !== dp[i - 1][h]) {
    selected.push(vehicles[i - 1]);
    h -= vehicles[i - 1].duration;
  }
}

console.log("Selected Vehicles:");
console.table(selected);

console.log(
  "Maximum Impact Score:",
  dp[n][mechanicHours]
);