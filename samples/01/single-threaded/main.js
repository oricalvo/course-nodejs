setTimeout(function() {
    console.log("timeout");
}, 1000);

console.log("Before sleep");
sleep(2000);
console.log("After sleep");

function sleep(ms) {
    const before = new Date();

    while(new Date() - before < ms);
}
