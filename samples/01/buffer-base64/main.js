const buf = Buffer.from("abc");
const str = buf.toString("base64");
const clone = Buffer.from(str, "base64");
console.log(Buffer.compare(buf, clone));
