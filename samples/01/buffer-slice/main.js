const buf = Buffer.from("abcde");

const slice = buf.slice(0, 1);

console.log(slice.buffer == buf.buffer);
