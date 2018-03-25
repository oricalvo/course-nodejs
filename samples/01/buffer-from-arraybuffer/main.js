const buf1 = Buffer.from("abcdef");

// buf1[0] = "X".charCodeAt(0);

const buf2 = Buffer.from(buf1.buffer, 0, 10);

console.log(buf1.byteOffset);

console.log(buf1.toString());
console.log(buf2.toString());

// console.log(buf1.toString());
// console.log(buf2.toString());

