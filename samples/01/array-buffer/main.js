const buf = new ArrayBuffer(16);

const view8 = new Uint8Array(buf);
view8[0] = 1;
view8[1] = 1;

const view16 = new Uint16Array(buf);
console.log(view16[0]);
