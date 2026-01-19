import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false, // Disable terminal features, such as line editing
});

rl.on("line", (line) => {
  if (line.includes("exit")) {
    process.exit(0);
  } else {
    console.log(`line received:(Server data): ${line}`);
  }
});
