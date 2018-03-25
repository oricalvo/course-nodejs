const buf1 = Buffer.from("abc");
const buf2 = Buffer.from("cde");

const buf3 = Buffer.concat([buf1, buf2]);

buf1[0] = "X".charCodeAt(0);

console.log(buf1.toString());
console.log(buf3.toString());
