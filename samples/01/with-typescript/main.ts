import * as readline from "readline";

console.log(process.pid);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter num", function(ans) {
    console.log(ans);
});
