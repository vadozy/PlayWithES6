let p1 = Promise.resolve(42);

let p2 = new Promise(function(resolve, reject) {
    setImmediate(() => resolve(43));
});
let p3 = new Promise(function(resolve, reject) {
    setImmediate(() => resolve(44));
});
let p4 = Promise.race([p1, p2, p3]);
p4.then(function(value) {
    console.log(value);     // 42
});

// -- -- -- 

p1 = new Promise(function(resolve, reject) {
    setImmediate(() => resolve(42));
});

p2 = Promise.reject(43);

p3 = new Promise(function(resolve, reject) {
    setImmediate(() => resolve(44));
});

p4 = Promise.race([p1, p2, p3]);

p4
    .then(function(value) {
        console.log(value);     // prints nothing
    })
    .catch(function(value) {
        console.log(value);     // 43
    });
