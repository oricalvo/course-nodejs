"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
console.log(process.pid);
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter num", function (ans) {
    console.log(ans);
});
