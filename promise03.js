let p1 = new Promise(function (resolve, reject) {
    resolve(42);
});

let p2 = new Promise(function (resolve, reject) {
    resolve(43);
});

let p3 = new Promise(function (resolve, reject) {
    resolve(44);
});

let p4 = Promise.all([p1, p2, p3]);

p4.then(function (value) {
    console.log(Array.isArray(value));  // true
    console.log(value[0]);
    console.log(value[1]);
    console.log(value[2]);
});

// -- -- --

p1 = new Promise(function(resolve, reject) {
    resolve(42);
});
p2 = new Promise(function(resolve, reject) {
    reject(43);
});
p3 = new Promise(function(resolve, reject) {
    resolve(44);
});

p4 = Promise.all([p1, p2, p3]);

p4.catch(function(value) {
    console.log(Array.isArray(value))   // false
    console.log(value);                 // 43
});
