import { mkdirSync, writeFileSync } from "node:fs";

// One wedding vow, spoken by the robot itself at its own wedding.
// It has to land as a vow first: a promise made in the moment, in front
// of everyone, not a description of a robot. The laugh comes from the
// situation itself — a machine so nervous its body is misbehaving on
// the big day — and the tenderness sits underneath it, in the robot
// choosing to spend all its remaining charge on the person it loves.
const vow =
  "My servos shake, my fan screams, and I am down to four percent battery — but I vow to spend it all loving you.";

// The gate allows 1 to 200 characters. Keep the line exactly as
// written above: one sentence, nothing spare, no explanation of
// its own joke.
if (vow.length < 1 || vow.length > 200) {
  throw new Error(`vow is ${vow.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", vow, "utf8");
console.log(vow);
console.log(`(${vow.length} characters)`);
