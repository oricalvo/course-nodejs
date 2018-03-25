// const buf = Buffer.alloc(10);
//
// for(let i=0; i<buf.length; i++) {
//     buf[i] = 0x0055;
// }
//
// for(const byte of buf) {
//     console.log(byte);
// }

const buf = Buffer.alloc(10);
buf[0] = 1000; //0x000003e8
console.log(buf[0]); //0xe8

// const buf = new ArrayBuffer(4);
// const arr = new Uint32Array(buf);
// //arr[0] = 1000;
// arr[0] = 0x000003e8;
//
// // console.log(buf);
// //
// const b = Buffer.from(buf);
// console.log(b.toString("hex"));
//
// console.log(0x000003e8);